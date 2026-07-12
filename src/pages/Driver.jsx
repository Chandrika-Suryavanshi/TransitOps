import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DriverForm from "../components/DriverForm";
import DriverTable from "../components/DriverTable";


function Driver({ setPage }) {

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

          <h1>Driver & Safety Profiles</h1>

          <p style={{color:"#aaa"}}>
            Manage drivers, licenses and availability status
          </p>


          <br/>


          <DriverForm/>


          <br/>


          <DriverTable/>


        </div>


      </div>


    </div>
  );
}


export default Driver;