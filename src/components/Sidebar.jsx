function Sidebar({ setPage }) {
  return (
    <div
      style={{
        width: "220px",
        background: "#0f0f0f",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        borderRight: "1px solid #333",
      }}
    >

      <h2 style={{color:"#f4b400"}}>
        TransitOps
      </h2>

      <hr style={{borderColor:"#333"}} />


      <p
        style={{ cursor:"pointer" }}
        onClick={()=>setPage("dashboard")}
      >
        Dashboard
      </p>


      <p
        style={{ cursor:"pointer" }}
        onClick={()=>setPage("vehicles")}
      >
        Fleet
      </p>


      <p
        style={{ cursor:"pointer" }}
        onClick={()=>setPage("drivers")}
      >
        Drivers
      </p>


      <p
        style={{ cursor:"pointer" }}
        onClick={()=>setPage("trips")}
      >
        Trips
      </p>


      <p
        style={{ cursor:"pointer" }}
        onClick={()=>setPage("maintenance")}
      >
        Maintenance
      </p>


      <p
        style={{ cursor:"pointer" }}
        onClick={()=>setPage("fuel")}
      >
        Fuel & Expenses
      </p>


      <p
        style={{ cursor:"pointer" }}
        onClick={()=>setPage("reports")}
      >
        Analytics
      </p>


      <p
        style={{ cursor:"pointer" }}
        onClick={()=>setPage("settings")}
      >
        Settings
      </p>


    </div>
  );
}

export default Sidebar;