function MaintenanceTable(){

const maintenance=[

{
vehicle:"VAN-05",
issue:"Engine Service",
date:"12 July 2026",
technician:"AutoCare",
status:"Completed"
},

{
vehicle:"TRUCK-11",
issue:"Brake Repair",
date:"15 July 2026",
technician:"Fleet Service",
status:"In Progress"
},

{
vehicle:"MINI-03",
issue:"Oil Change",
date:"20 July 2026",
technician:"QuickFix",
status:"Scheduled"
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

<tr
style={{
background:"#1e1e1e"
}}
>

<th>Vehicle</th>
<th>Issue</th>
<th>Date</th>
<th>Technician</th>
<th>Status</th>

</tr>

</thead>


<tbody>

{
maintenance.map((m,index)=>(

<tr
key={index}
style={{
borderBottom:"1px solid #333"
}}
>

<td>{m.vehicle}</td>

<td>{m.issue}</td>

<td>{m.date}</td>

<td>{m.technician}</td>


<td>

<span
style={{
background:
m.status==="Completed"
?"green"
:
m.status==="In Progress"
?"orange"
:"blue",

padding:"5px 12px",
borderRadius:"15px"
}}
>

{m.status}

</span>

</td>


</tr>

))
}


</tbody>


</table>

)

}

export default MaintenanceTable;