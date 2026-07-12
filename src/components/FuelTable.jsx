function FuelTable(){

const fuelLogs=[

{
vehicle:"VAN-05",
date:"12 July 2026",
fuel:"Diesel",
litres:"50 L",
cost:"₹5000",
driver:"Rahul"
},

{
vehicle:"TRUCK-11",
date:"15 July 2026",
fuel:"Diesel",
litres:"120 L",
cost:"₹12000",
driver:"Amit"
}

];


const expenses=[

{
category:"Repair",
date:"10 July 2026",
description:"Engine Service",
amount:"₹15000",
status:"Paid"
},

{
category:"Insurance",
date:"05 July 2026",
description:"Vehicle Insurance",
amount:"₹25000",
status:"Paid"
}

];


return(

<div>


<h2>Fuel Logs</h2>

<table
style={{
width:"100%",
borderCollapse:"collapse",
color:"white"
}}
>

<thead>

<tr style={{background:"#1e1e1e"}}>

<th>Vehicle</th>
<th>Date</th>
<th>Fuel Type</th>
<th>Litres</th>
<th>Cost</th>
<th>Driver</th>

</tr>

</thead>


<tbody>

{
fuelLogs.map((f,i)=>(

<tr key={i}
style={{
borderBottom:"1px solid #333"
}}
>

<td>{f.vehicle}</td>
<td>{f.date}</td>
<td>{f.fuel}</td>
<td>{f.litres}</td>
<td>{f.cost}</td>
<td>{f.driver}</td>

</tr>

))
}

</tbody>

</table>



<br/><br/>


<h2>Expenses</h2>


<table
style={{
width:"100%",
borderCollapse:"collapse",
color:"white"
}}
>

<thead>

<tr style={{background:"#1e1e1e"}}>

<th>Category</th>
<th>Date</th>
<th>Description</th>
<th>Amount</th>
<th>Status</th>

</tr>

</thead>


<tbody>


{
expenses.map((e,i)=>(

<tr key={i}
style={{
borderBottom:"1px solid #333"
}}
>

<td>{e.category}</td>
<td>{e.date}</td>
<td>{e.description}</td>
<td>{e.amount}</td>

<td>
<span
style={{
background:"green",
padding:"5px 12px",
borderRadius:"15px"
}}
>
{e.status}
</span>
</td>

</tr>

))
}


</tbody>

</table>


</div>

)

}


export default FuelTable;