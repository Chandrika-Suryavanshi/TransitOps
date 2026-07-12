function VehicleTable({vehicles}) {

  return (

    <table border="1">

      <thead>
        <tr>
          <th>Number</th>
          <th>Model</th>
          <th>Type</th>
        </tr>
      </thead>


      <tbody>

      {
        vehicles.map((v,index)=>(
          <tr key={index}>
            <td>{v.number}</td>
            <td>{v.model}</td>
            <td>{v.type}</td>
          </tr>
        ))
      }

      </tbody>

    </table>

  );
}

export default VehicleTable;