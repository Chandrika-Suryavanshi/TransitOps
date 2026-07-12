import TripForm from "../components/TripForm";
import TripTable from "../components/TripTable";

function Trip() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Trip Management</h2>

      <TripForm />

      <br />

      <TripTable />
    </div>
  );
}

export default Trip;