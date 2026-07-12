function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        width: "180px",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "8px",
        background: "#f5f5f5",
      }}
    >
      <h4>{title}</h4>

      <h2>{value}</h2>
    </div>
  );
}

export default DashboardCard;