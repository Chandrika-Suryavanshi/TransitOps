import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard({ setPage }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#121212",
        color: "white",
      }}
    >

      {/* Sidebar */}
      <Sidebar setPage={setPage} />


      {/* Main Content */}
      <div
        style={{
          flex: 1,
        }}
      >

        <Navbar />


        <div
          style={{
            padding: "25px",
          }}
        >

          <h1>
            Dashboard
          </h1>


          <p
            style={{
              color: "#999",
            }}
          >
            Overview of your fleet operations
          </p>


          <br />


          {/* Dashboard Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >

            <DashboardCard
              title="Active Vehicles"
              value="53"
            />


            <DashboardCard
              title="Available Vehicles"
              value="42"
            />


            <DashboardCard
              title="Maintenance"
              value="05"
            />


            <DashboardCard
              title="Active Trips"
              value="18"
            />


            <DashboardCard
              title="Pending Trips"
              value="09"
            />


            <DashboardCard
              title="Drivers On Duty"
              value="26"
            />


            <DashboardCard
              title="Fleet Utilization"
              value="81%"
            />


          </div>


        </div>


      </div>


    </div>
  );
}

export default Dashboard;