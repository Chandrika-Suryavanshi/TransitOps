import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MaintenanceForm from "../components/MaintenanceForm";
import MaintenanceTable from "../components/MaintenanceTable";


function Maintenance({ setPage }) {

  return (
    <div
      style={{
        display:"flex",
        minHeight:"100vh",
        background:"#121212",
        color:"white"
      }}
    >

      <Sidebar setPage={setPage}/>


      <div style={{flex:1}}>

        <Navbar/>


        <div style={{padding:"25px"}}>


          <h1>Maintenance Management</h1>

          <p style={{color:"#999"}}>
            Monitor vehicle service schedules and repair status
          </p>


          <br/>


          {/* Summary Cards */}

          <div
            style={{
              display:"flex",
              gap:"15px",
              flexWrap:"wrap"
            }}
          >

            <div className="card">
              <h3>Scheduled</h3>
              <h1>12</h1>
            </div>


            <div className="card">
              <h3>In Progress</h3>
              <h1>05</h1>
            </div>


            <div className="card">
              <h3>Completed</h3>
              <h1>45</h1>
            </div>


            <div className="card">
              <h3>Total Cost</h3>
              <h1>₹2.5L</h1>
            </div>


          </div>


          <br/><br/>


          <MaintenanceForm/>


          <br/>


          <MaintenanceTable/>


        </div>


      </div>


    </div>
  );
}


export default Maintenance;