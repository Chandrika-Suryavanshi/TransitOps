function Sidebar({ setPage }) {
  return (
    <div
      style={{
        width: "220px",
        background: "#222",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>TransitOps</h2>

      <hr />

      <p
        style={{ cursor: "pointer" }}
        onClick={() => setPage("dashboard")}
      >
        Dashboard
      </p>

      <p
        style={{ cursor: "pointer" }}
        onClick={() => setPage("drivers")}
      >
        Drivers
      </p>

      <p
        style={{ cursor: "pointer" }}
        onClick={() => setPage("vehicles")}
      >
        Vehicles
      </p>

      <p
        style={{ cursor: "pointer" }}
        onClick={() => setPage("trips")}
      >
        Trips
      </p>

      <p
        style={{ cursor: "pointer" }}
        onClick={() => setPage("maintenance")}
      >
        Maintenance
      </p>

      <p
        style={{ cursor: "pointer" }}
        onClick={() => setPage("fuel")}
      >
        Fuel
      </p>

      <p
        style={{ cursor: "pointer" }}
        onClick={() => setPage("reports")}
      >
        Reports
      </p>

      <p
        style={{ cursor: "pointer" }}
        onClick={() => setPage("settings")}
      >
        Settings
      </p>
    </div>
  );
}

export default Sidebar;