import DriverForm from "../components/DriverForm";
import DriverTable from "../components/DriverTable";

function Driver() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Driver Management</h2>

      <DriverForm />

      <br />

      <DriverTable />
    </div>
  );
}

export default Driver;