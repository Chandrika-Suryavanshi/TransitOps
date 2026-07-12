import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FuelForm from "../components/FuelForm";
import FuelTable from "../components/FuelTable";


function Fuel({ setPage }) {

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


          <div
            style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}
          >

            <div>
              <h1>Fuel & Expenses</h1>

              <p style={{color:"#999"}}>
                Track fuel usage and operational expenses
              </p>
            </div>


            <FuelForm/>


          </div>


          <br/><br/>


          <FuelTable/>


        </div>


      </div>

    </div>
  );
}


export default Fuel;