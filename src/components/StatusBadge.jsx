function StatusBadge({ status }) {
  let color = "#999";

  if (status === "Available") color = "green";
  else if (status === "On Trip") color = "orange";
  else if (status === "Maintenance") color = "red";
  else if (status === "Completed") color = "blue";

  return (
    <span
      style={{
        backgroundColor: color,
        color: "white",
        padding: "5px 10px",
        borderRadius: "15px",
        fontSize: "12px",
      }}
    >
      {status}
    </span>
  );
}

export default StatusBadge;