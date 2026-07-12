function TripTable(){

const trips=[

{
id:"TR-101",
vehicle:"VAN-05",
driver:"Rahul Sharma",
route:"Bhopal → Indore",
status:"Active"
},

{
id:"TR-102",
vehicle:"TRUCK-11",
driver:"Amit Verma",
route:"Jabalpur → Pune",
status:"Pending"
},

{
id:"TR-103",
vehicle:"MINI-03",
driver:"Priya Singh",
route:"Delhi → Jaipur",
status:"Completed"
}

];


return(

<table

style={{
width:"100%",
borderCollapse:"collapse",
color:"white"
}}

>


<thead>

<tr style={{background:"#1e1e1e"}}>

<th>Trip ID</th>
<th>Vehicle</th>
<th>Driver</th>
<th>Route</th>
<th>Status</th>

</tr>

</thead>



<tbody>

{
trips.map((trip,index)=>(

<tr
key={index}
style={{
borderBottom:"1px solid #333"
}}
>

<td>{trip.id}</td>

<td>{trip.vehicle}</td>

<td>{trip.driver}</td>

<td>{trip.route}</td>

<td>

<span
style={{
background:
trip.status==="Active"
?"green"
:
trip.status==="Pending"
?"orange"
:"blue",

padding:"5px 12px",
borderRadius:"15px"
}}
>

{trip.status}

</span>

</td>


</tr>

))
}


</tbody>


</table>

)

}

export default TripTable;