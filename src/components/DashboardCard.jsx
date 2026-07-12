function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        width: "170px",
        background: "#1e1e1e",
        color: "white",
        border: "1px solid #444",
        borderRadius: "8px",
        padding: "15px",
      }}
    >
      <p
        style={{
          color: "#9e9e9e",
          fontSize: "13px",
        }}
      >
        {title}
      </p>

      <h2>{value}</h2>
    </div>
  );
}

export default DashboardCard;