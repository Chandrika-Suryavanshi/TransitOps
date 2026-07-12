function DriverTable() {
  return (
    <div>
      <h3>Driver List</h3>

      <table
        border="1"
        cellPadding="10"
        width="100%"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>License</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rahul Sharma</td>
            <td>9876543210</td>
            <td>MP09-12345</td>
            <td>Available</td>
            <td>
              <button>Edit</button>

              <button
                style={{
                  marginLeft: "10px",
                }}
              >
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>Amit Verma</td>
            <td>9876543201</td>
            <td>MP20-54321</td>
            <td>On Trip</td>
            <td>
              <button>Edit</button>

              <button
                style={{
                  marginLeft: "10px",
                }}
              >
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>Rohit Singh</td>
            <td>9876543299</td>
            <td>MP04-78945</td>
            <td>Inactive</td>
            <td>
              <button>Edit</button>

              <button
                style={{
                  marginLeft: "10px",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DriverTable;