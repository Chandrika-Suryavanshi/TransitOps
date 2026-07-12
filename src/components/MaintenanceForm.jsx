function MaintenanceForm() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <h3>Add Maintenance Record</h3>

      <form>

        <input
          type="text"
          placeholder="Vehicle Number"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Maintenance Type"
          style={inputStyle}
        />

        <input
          type="date"
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Cost (₹)"
          style={inputStyle}
        />

        <textarea
          placeholder="Description"
          style={textAreaStyle}
        />

        <br />

        <button style={buttonStyle}>
          Save Record
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

const textAreaStyle = {
  width: "100%",
  height: "80px",
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

export default MaintenanceForm;