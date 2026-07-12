# Fleet Management — Backend API

Node.js + Express + MongoDB backend implementing the Fleet Management spec:
vehicles, drivers, trips (with dispatch/complete/cancel lifecycle), maintenance,
fuel & expense tracking, RBAC auth, and reports/analytics with CSV export.

## 1. Setup

```bash
cd fleet-backend
npm install
cp .env.example .env      # then edit JWT_SECRET and MONGO_URI if needed
npm run dev                # nodemon, restarts on file changes
# or: npm start
```

Requires a running MongoDB instance (local `mongod` or a MongoDB Atlas URI in `MONGO_URI`).

Health check: `GET http://localhost:5000/api/health`

## 2. Auth & Roles

Roles: `Admin`, `Manager`, `Dispatcher`, `Viewer`.

```
POST /api/auth/register   { name, email, password, role }
POST /api/auth/login      { email, password }  -> returns { token, ... }
GET  /api/auth/me         (Bearer token)
```

Send `Authorization: Bearer <token>` on every other request.

> The register endpoint is left open for hackathon convenience. Before a real
> deployment, lock it behind `authorize('Admin')` or a seed script.

## 3. Core Resources

| Resource | Base path | Notes |
|---|---|---|
| Vehicles | `/api/vehicles` | CRUD + `GET /available-for-dispatch` |
| Drivers | `/api/drivers` | CRUD + `GET /available-for-dispatch` |
| Trips | `/api/trips` | Create (Draft), `/:id/dispatch`, `/:id/complete`, `/:id/cancel` |
| Maintenance | `/api/maintenance` | Create (auto → vehicle In Shop), `/:id/close` (auto → Available) |
| Fuel Logs | `/api/fuel-logs` | Create/list |
| Expenses | `/api/expenses` | Create/list |
| Reports | `/api/reports` | `/dashboard`, `/vehicles`, `/fleet-utilization`, `/export/csv` |

## 4. Business Rules Implemented

- Vehicle `registrationNumber` is unique (DB-level unique index).
- Vehicles that are `Retired` or `In Shop` never appear in `/vehicles/available-for-dispatch`.
- Drivers with expired licenses or `Suspended` status never appear in `/drivers/available-for-dispatch`, and dispatch is re-validated server-side even if a stale ID is posted directly.
- A vehicle/driver already `On Trip` cannot be dispatched to a second trip.
- `cargoWeightKg` is checked against the vehicle's `maxLoadCapacityKg` both at trip creation and again at dispatch (state may have changed in between).
- Dispatch → vehicle & driver become `On Trip`. Complete → both become `Available`. Cancel (from Dispatched) → both restored to `Available`. Cancel from `Draft` has no side effects.
- Creating an active maintenance log → vehicle becomes `In Shop`. Closing it → vehicle returns to `Available`, unless it has been marked `Retired`, or another active maintenance log still exists for it.

## 5. Example Workflow (mirrors the spec's Section 5)

```bash
# 1. Register + login as Admin, save the token
TOKEN=$(curl -s -X POST localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@fleet.com","password":"secret123"}' | jq -r .token)

# 2. Register vehicle Van-05 (max capacity 500kg)
VEHICLE_ID=$(curl -s -X POST localhost:5000/api/vehicles \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"registrationNumber":"Van-05","maxLoadCapacityKg":500,"acquisitionCost":20000}' | jq -r ._id)

# 3. Register driver Alex
DRIVER_ID=$(curl -s -X POST localhost:5000/api/drivers \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"name":"Alex","licenseNumber":"DL123","licenseExpiryDate":"2030-01-01"}' | jq -r ._id)

# 4. Create trip with 450kg cargo (Draft)
TRIP_ID=$(curl -s -X POST localhost:5000/api/trips \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d "{\"source\":\"Delhi\",\"destination\":\"Agra\",\"vehicle\":\"$VEHICLE_ID\",\"driver\":\"$DRIVER_ID\",\"cargoWeightKg\":450,\"plannedDistanceKm\":220}" | jq -r ._id)

# 5. Dispatch -> vehicle & driver become On Trip
curl -s -X POST localhost:5000/api/trips/$TRIP_ID/dispatch -H "Authorization: Bearer $TOKEN"

# 6. Complete -> both become Available again
curl -s -X POST localhost:5000/api/trips/$TRIP_ID/complete \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"actualDistanceKm":225,"fuelConsumedLiters":30}'

# 7. Open a maintenance record -> vehicle becomes In Shop, hidden from dispatch
curl -s -X POST localhost:5000/api/maintenance \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d "{\"vehicle\":\"$VEHICLE_ID\",\"type\":\"Oil Change\",\"cost\":50}"

# 8. Dashboard KPIs
curl -s localhost:5000/api/reports/dashboard -H "Authorization: Bearer $TOKEN"
```

## 6. Not Included in This Pass (backend-only scope)

Per the spec's "Bonus/Deliverables" list, these are frontend or infra concerns
and are **not** part of this backend-only deliverable — hook them up against
the API above when you build the frontend:

- Responsive UI, dashboard charts, dark mode
- Email reminders for expiring licenses (would be a simple cron job calling
  the Driver model + a mail provider — ask if you want this stubbed in)
- Vehicle document upload storage (schema field `documents[]` already exists
  on the Vehicle model; wire up S3/Cloudinary when ready)
- PDF export (CSV export is implemented; PDF was marked optional in the spec)
- Google Drive OAuth export (bonus feature)

## 7. Project Structure

```
src/
  config/       constants.js (enums), db.js (Mongo connection)
  models/       User, Vehicle, Driver, Trip, MaintenanceLog, FuelLog, Expense
  middleware/   auth.js (JWT + RBAC), errorHandler.js
  controllers/  one per resource, business rules live here
  routes/       one per resource, wires controllers + auth/roles
  app.js        Express app assembly
  server.js     entry point (connects DB, starts listening)
```
