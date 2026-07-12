import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Driver from "./pages/Driver";
import Vehicle from "./pages/Vehicle";
import Trip from "./pages/Trip";
import Maintenance from "./pages/Maintenance";

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", flex: 1 }}>
          <Dashboard />

          <hr />

          <Driver />

          <hr />

          <Vehicle />

          <hr />

          <Trip />

          <hr />

          <Maintenance />
        </div>
      </div>
    </div>
  );
}

export default App;