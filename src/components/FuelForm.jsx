function FuelForm(){

return(

<div
style={{
display:"flex",
gap:"12px"
}}
>

<button
style={{
background:"#d89000",
color:"white",
border:"none",
padding:"10px 18px",
borderRadius:"6px",
cursor:"pointer"
}}
>
+ Log Fuel
</button>


<button
style={{
background:"#2f80ed",
color:"white",
border:"none",
padding:"10px 18px",
borderRadius:"6px",
cursor:"pointer"
}}
>
+ Add Expense
</button>


</div>

)

}

export default FuelForm;