import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TripForm from "../components/TripForm";
import TripTable from "../components/TripTable";


function Trip({ setPage }) {

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

          <h1>Trip Dispatcher</h1>

          <p style={{color:"#aaa"}}>
            Manage active trips and assign vehicles & drivers
          </p>


          <br/>


          <TripForm/>


          <br/>


          <TripTable/>


        </div>

      </div>


    </div>
  );
}


export default Trip;