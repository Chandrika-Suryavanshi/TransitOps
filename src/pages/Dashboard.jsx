import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <DashboardCard title="Drivers" value="20" />
        <DashboardCard title="Vehicles" value="15" />
        <DashboardCard title="Trips" value="8" />
        <DashboardCard title="Maintenance" value="3" />
      </div>
    </div>
  );
}

export default Dashboard;