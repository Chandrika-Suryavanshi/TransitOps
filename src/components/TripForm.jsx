function TripForm() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <h3>Create Trip</h3>

      <form>

        <input
          type="text"
          placeholder="Trip ID"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Source"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Destination"
          style={inputStyle}
        />

        <select style={inputStyle}>
          <option>Select Driver</option>
          <option>Rahul Sharma</option>
          <option>Amit Verma</option>
          <option>Rohit Singh</option>
        </select>

        <select style={inputStyle}>
          <option>Select Vehicle</option>
          <option>MP04AB1234</option>
          <option>MP20CD5678</option>
          <option>MP09EF4321</option>
        </select>

        <input
          type="date"
          style={inputStyle}
        />

        <button style={buttonStyle}>
          Create Trip
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

export default TripForm;