import VehicleForm from "../components/VehicleForm";
import VehicleTable from "../components/VehicleTable";

function Vehicle() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Vehicle Management</h2>

      <VehicleForm />

      <br />

      <VehicleTable />
    </div>
  );
}

export default Vehicle;