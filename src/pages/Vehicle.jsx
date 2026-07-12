import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VehicleForm from "../components/VehicleForm";
import VehicleTable from "../components/VehicleTable";


function Vehicle({setPage}){

return(

<div style={{display:"flex"}}>

<Sidebar setPage={setPage}/>


<div style={{flex:1}}>

<Navbar/>


<div style={{padding:"20px"}}>

<h1>Vehicle Registry</h1>


<VehicleForm/>


<VehicleTable/>


</div>

</div>

</div>

)

}


export default Vehicle;