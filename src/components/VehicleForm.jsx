function VehicleForm() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <h3>Add Vehicle</h3>

      <form>
        <input
          type="text"
          placeholder="Vehicle Number"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Vehicle Type"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Brand"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Model"
          style={inputStyle}
        />

        <select style={inputStyle}>
          <option>Available</option>
          <option>On Trip</option>
          <option>Maintenance</option>
        </select>

        <button style={buttonStyle}>
          Add Vehicle
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
};

const buttonStyle = {
  padding: "10px 20px",
  background: "#ff9800",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default VehicleForm;