function VehicleForm() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <button
        style={{
          backgroundColor: "#f4b400",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        + Add Vehicle
      </button>
    </div>
  );
}

export default VehicleForm;