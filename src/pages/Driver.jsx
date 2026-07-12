import DriverForm from "../components/DriverForm";
import DriverTable from "../components/DriverTable";

function Driver() {
  return (
    <div>
      <h1>Driver Management</h1>

      <DriverForm />

      <br />

      <DriverTable />
    </div>
  );
}

export default Driver;