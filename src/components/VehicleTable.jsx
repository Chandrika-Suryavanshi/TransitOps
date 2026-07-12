function VehicleTable() {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead
        style={{
          backgroundColor: "#222",
          color: "white",
        }}
      >
        <tr>
          <th>Registration No.</th>
          <th>Name / Model</th>
          <th>Type</th>
          <th>Capacity</th>
          <th>Odometer</th>
          <th>Cost</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>MP09AB1234</td>
          <td>Tata Ace</td>
          <td>Mini Truck</td>
          <td>750 kg</td>
          <td>52,000 km</td>
          <td>₹6,50,000</td>
          <td>Available</td>
        </tr>

        <tr>
          <td>MP20CD5678</td>
          <td>Ashok Leyland</td>
          <td>Truck</td>
          <td>8 Ton</td>
          <td>1,20,000 km</td>
          <td>₹28,00,000</td>
          <td>On Trip</td>
        </tr>

        <tr>
          <td>MP15EF1122</td>
          <td>Mahindra Bolero</td>
          <td>Pickup</td>
          <td>1.5 Ton</td>
          <td>78,500 km</td>
          <td>₹10,20,000</td>
          <td>Maintenance</td>
        </tr>
      </tbody>
    </table>
  );
}

export default VehicleTable;