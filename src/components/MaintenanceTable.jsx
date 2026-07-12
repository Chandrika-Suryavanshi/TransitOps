function MaintenanceTable() {
  return (
    <div>
      <h3>Maintenance Records</h3>

      <table
        border="1"
        cellPadding="10"
        width="100%"
      >
        <thead>
          <tr>
            <th>Vehicle No.</th>
            <th>Maintenance Type</th>
            <th>Date</th>
            <th>Cost</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>MP04AB1234</td>
            <td>Engine Service</td>
            <td>12-07-2026</td>
            <td>₹5000</td>
            <td>Oil change and engine check</td>
            <td>
              <button>Edit</button>

              <button style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>MP20CD5678</td>
            <td>Tyre Replacement</td>
            <td>15-07-2026</td>
            <td>₹8000</td>
            <td>Changed front tyres</td>
            <td>
              <button>Edit</button>

              <button style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>MP09EF4321</td>
            <td>Brake Service</td>
            <td>18-07-2026</td>
            <td>₹3000</td>
            <td>Brake pad replacement</td>
            <td>
              <button>Edit</button>

              <button style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default MaintenanceTable;