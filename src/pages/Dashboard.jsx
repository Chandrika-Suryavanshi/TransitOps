import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard({ setPage }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar setPage={setPage} />

      <div style={{ flex: 1 }}>

        <Navbar />

        <div style={{ padding: "20px" }}>

          <h2>Dashboard</h2>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <DashboardCard title="Active Vehicles" value="53" />
            <DashboardCard title="Available Vehicles" value="42" />
            <DashboardCard title="Maintenance" value="05" />
            <DashboardCard title="Trips" value="18" />
            <DashboardCard title="Drivers" value="26" />
            <DashboardCard title="Fleet Utilization" value="81%" />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;