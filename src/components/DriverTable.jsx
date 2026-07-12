function DriverTable(){

const drivers=[

{
name:"Rahul Sharma",
license:"MP123456",
phone:"9876543210",
experience:"5 Years",
status:"Available"
},

{
name:"Amit Verma",
license:"MP789012",
phone:"8765432109",
experience:"8 Years",
status:"On Trip"
},

{
name:"Priya Singh",
license:"MP456789",
phone:"7654321098",
experience:"3 Years",
status:"Leave"
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

<th>Name</th>
<th>License No.</th>
<th>Phone</th>
<th>Experience</th>
<th>Status</th>

</tr>

</thead>



<tbody>


{
drivers.map((driver,index)=>(

<tr
key={index}
style={{
borderBottom:"1px solid #333"
}}
>

<td>{driver.name}</td>

<td>{driver.license}</td>

<td>{driver.phone}</td>

<td>{driver.experience}</td>

<td>

<span
style={{
background:
driver.status==="Available"
?"green"
:
driver.status==="On Trip"
?"blue"
:"orange",

padding:"5px 12px",
borderRadius:"15px"
}}
>

{driver.status}

</span>

</td>


</tr>

))
}


</tbody>


</table>

)

}

export default DriverTable;