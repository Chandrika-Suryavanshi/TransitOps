import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Fuel({ setPage }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar setPage={setPage} />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Fuel & Expense</h1>
        </div>
      </div>
    </div>
  );
}

export default Fuel;