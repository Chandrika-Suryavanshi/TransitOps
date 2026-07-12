import MaintenanceForm from "../components/MaintenanceForm";
import MaintenanceTable from "../components/MaintenanceTable";

function Maintenance() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Maintenance Management</h2>

      <MaintenanceForm />

      <br />

      <MaintenanceTable />
    </div>
  );
}

export default Maintenance;