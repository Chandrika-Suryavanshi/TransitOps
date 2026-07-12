function DriverForm() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <h3>Add Driver</h3>

      <form>
        <input
          type="text"
          placeholder="Driver Name"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Phone Number"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="License Number"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Address"
          style={inputStyle}
        />

        <select style={inputStyle}>
          <option>Available</option>
          <option>On Trip</option>
          <option>Inactive</option>
        </select>

        <button style={buttonStyle}>
          Add Driver
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

export default DriverForm;