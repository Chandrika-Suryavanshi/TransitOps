function StatusBadge({ status }) {

  let color = "#4caf50";

  if(status === "On Trip")
    color = "#2196f3";

  if(status === "In Shop")
    color = "#ff9800";

  if(status === "Retired")
    color = "#f44336";


  return (
    <span
      style={{
        background: color,
        color:"white",
        padding:"5px 12px",
        borderRadius:"15px",
        fontSize:"12px"
      }}
    >
      {status}
    </span>
  );
}

export default StatusBadge;