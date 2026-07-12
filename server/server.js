const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Frontend se connect karne ke liye zaroori hai
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors()); // CORS enable kiya taaki frontend fetch request block na ho

// ==========================================
// 1. MONGODB ATLAS CONNECTION
// ==========================================
// Yahan .env file se URI aayega, agar nahi hai toh fallback string use hogi
// ==========================================
// 1. MONGODB ATLAS CONNECTION (FIXED)
// ==========================================
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://naitiksaraf2507_db_user:admin123@cluster0.ayjqwed.mongodb.net/?appName=Cluster0";
  
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Database online aur connect ho gaya hai, Bhai!"))
  .catch((err) => console.error("Database connection error:", err));

// ==========================================
// 2. DATABASE MODELS (SCHEMAS)
// ==========================================
const Vehicle = mongoose.model(
  "Vehicle",
  new mongoose.Schema({
    regNumber: { type: String, unique: true, required: true },
    maxCapacity: Number,
    acquisitionCost: { type: Number, default: 100000 },
    status: {
      type: String,
      enum: ["Available", "On Trip", "In Shop", "Retired"],
      default: "Available",
    },
    revenue: { type: Number, default: 0 },
  }),
);

const Driver = mongoose.model(
  "Driver",
  new mongoose.Schema({
    name: { type: String, required: true },
    licenseExpired: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["Available", "On Trip", "Off Duty", "Suspended"],
      default: "Available",
    },
  }),
);

const Trip = mongoose.model(
  "Trip",
  new mongoose.Schema({
    source: String,
    destination: String,
    regNumber: String,
    driverId: String,
    cargoWeight: Number,
    plannedDistance: Number,
    revenue: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["Draft", "Dispatched", "Completed", "Cancelled"],
      default: "Draft",
    },
    fuelConsumed: { type: Number, default: 0 },
  }),
);

const Maintenance = mongoose.model(
  "Maintenance",
  new mongoose.Schema({
    regNumber: String,
    description: String,
    cost: Number,
    status: { type: String, default: "Active" },
  }),
);

const FuelLog = mongoose.model(
  "FuelLog",
  new mongoose.Schema({
    regNumber: String,
    liters: Number,
    cost: Number,
    date: { type: Date, default: Date.now },
  }),
);

// ==========================================
// 3. APIS & HACKATHON BUSINESS LOGIC
// ==========================================

// Step 1: Register Vehicle
app.post("/api/vehicles", async (req, res) => {
  try {
    const { regNumber, maxCapacity, acquisitionCost } = req.body;
    const exists = await Vehicle.findOne({ regNumber });
    if (exists)
      return res.status(400).json({ error: "Vehicle already exists!" });

    const vehicle = new Vehicle({ regNumber, maxCapacity, acquisitionCost });
    await vehicle.save();
    res
      .status(201)
      .json({ message: "Vehicle registered successfully", vehicle });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Step 2: Register Driver
app.post("/api/drivers", async (req, res) => {
  try {
    const { name, licenseExpired } = req.body;
    const driver = new Driver({ name, licenseExpired });
    await driver.save();
    res.status(201).json({ message: "Driver registered successfully", driver });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Step 3, 4 & 5: Create & Dispatch Trip
app.post("/api/trips", async (req, res) => {
  try {
    const {
      source,
      destination,
      regNumber,
      driverId,
      cargoWeight,
      plannedDistance,
      revenue,
    } = req.body;

    const vehicle = await Vehicle.findOne({ regNumber });
    const driver = await Driver.findById(driverId);

    if (!vehicle || !driver)
      return res.status(404).json({ error: "Vehicle or Driver not found" });

    // Mandatory Rules Validations
    if (vehicle.status === "Retired" || vehicle.status === "In Shop")
      return res
        .status(400)
        .json({ error: "Vehicle not available for dispatch!" });
    if (driver.licenseExpired || driver.status === "Suspended")
      return res
        .status(400)
        .json({ error: "Driver is suspended or license expired!" });
    if (vehicle.status === "On Trip" || driver.status === "On Trip")
      return res
        .status(400)
        .json({ error: "Vehicle or Driver already on trip!" });
    if (cargoWeight > vehicle.maxCapacity)
      return res
        .status(400)
        .json({
          error: `Weight exceeds vehicle capacity of ${vehicle.maxCapacity} kg!`,
        });

    // Save Trip & Auto Status Change
    const trip = new Trip({
      source,
      destination,
      regNumber,
      driverId,
      cargoWeight,
      plannedDistance,
      revenue,
      status: "Dispatched",
    });
    vehicle.status = "On Trip";
    driver.status = "On Trip";

    await trip.save();
    await vehicle.save();
    await driver.save();

    res.status(201).json({ message: "Trip dispatched successfully", trip });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Step 6 & 7: Complete Trip
app.post("/api/trips/:id/complete", async (req, res) => {
  try {
    const { fuelConsumed } = req.body;
    const trip = await Trip.findById(req.params.id);
    if (!trip || trip.status !== "Dispatched")
      return res.status(400).json({ error: "Invalid trip state" });

    const vehicle = await Vehicle.findOne({ regNumber: trip.regNumber });
    const driver = await Driver.findById(trip.driverId);

    trip.status = "Completed";
    trip.fuelConsumed = fuelConsumed;

    // Restore Statuses to Available
    vehicle.status = "Available";
    driver.status = "Available";
    vehicle.revenue += trip.revenue;

    // Auto log fuel logs for ROI & Efficiency calculation
    const fuelLog = new FuelLog({
      regNumber: vehicle.regNumber,
      liters: fuelConsumed,
      cost: fuelConsumed * 100,
    });

    await trip.save();
    await vehicle.save();
    await driver.save();
    await fuelLog.save();

    res.json({ message: "Trip completed successfully", trip });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Step 8: Maintenance Log
app.post("/api/maintenance", async (req, res) => {
  try {
    const { regNumber, description, cost } = req.body;
    const vehicle = await Vehicle.findOne({ regNumber });
    if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

    const log = new Maintenance({ regNumber, description, cost });
    vehicle.status = "In Shop"; // Auto shift status to hide from pool

    await log.save();
    await vehicle.save();
    res
      .status(201)
      .json({ message: "Vehicle sent to Maintenance (In Shop)", log });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Step 9: Dashboard KPIs & Analytics
app.get("/api/analytics", async (req, res) => {
  try {
    const allVehicles = await Vehicle.find();
    const vehicleReports = await Promise.all(
      allVehicles.map(async (v) => {
        const fLogs = await FuelLog.find({ regNumber: v.regNumber });
        const mLogs = await Maintenance.find({ regNumber: v.regNumber });
        const vTrips = await Trip.find({
          regNumber: v.regNumber,
          status: "Completed",
        });

        const totalFuelCost = fLogs.reduce((sum, f) => sum + f.cost, 0);
        const totalFuelLiters = fLogs.reduce((sum, f) => sum + f.liters, 0);
        const totalMaintCost = mLogs.reduce((sum, m) => sum + m.cost, 0);
        const totalDistance = vTrips.reduce(
          (sum, t) => sum + t.plannedDistance,
          0,
        );

        const totalOperationalCost = totalFuelCost + totalMaintCost;
        const fuelEfficiency =
          totalFuelLiters > 0
            ? (totalDistance / totalFuelLiters).toFixed(2)
            : 0;
        const roi = (
          ((v.revenue - totalOperationalCost) / v.acquisitionCost) *
          100
        ).toFixed(2);

        return {
          vehicle: v.regNumber,
          currentStatus: v.status,
          totalOperationalCost,
          fuelEfficiency: `${fuelEfficiency} km/l`,
          roi: `${roi}%`,
        };
      }),
    );

    res.json({ vehicleReports });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
