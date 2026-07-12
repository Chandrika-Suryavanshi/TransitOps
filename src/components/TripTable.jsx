function TripTable() {
  return (
    <div>
      <h3>Trip List</h3>

      <table
        border="1"
        cellPadding="10"
        width="100%"
      >
        <thead>
          <tr>
            <th>Trip ID</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Driver</th>
            <th>Vehicle</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>T001</td>
            <td>Jabalpur</td>
            <td>Bhopal</td>
            <td>Rahul Sharma</td>
            <td>MP04AB1234</td>
            <td>12-07-2026</td>
            <td>Running</td>
            <td>
              <button>Edit</button>

              <button style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>T002</td>
            <td>Indore</td>
            <td>Ujjain</td>
            <td>Amit Verma</td>
            <td>MP20CD5678</td>
            <td>13-07-2026</td>
            <td>Completed</td>
            <td>
              <button>Edit</button>

              <button style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>T003</td>
            <td>Gwalior</td>
            <td>Sagar</td>
            <td>Rohit Singh</td>
            <td>MP09EF4321</td>
            <td>14-07-2026</td>
            <td>Scheduled</td>
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

export default TripTable;