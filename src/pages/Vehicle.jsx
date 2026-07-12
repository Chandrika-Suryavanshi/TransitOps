import { useState } from "react";
import VehicleForm from "../components/VehicleForm";
import VehicleTable from "../components/VehicleTable";

function Vehicle() {
  const [vehicles, setVehicles] = useState([]);

  const addVehicle = (vehicle) => {
    setVehicles([...vehicles, vehicle]);
  };

  return (
    <div>
      <h1>Vehicle Management</h1>

      <VehicleForm addVehicle={addVehicle} />

      <br />

      <VehicleTable vehicles={vehicles} />
    </div>
  );
}

export default Vehicle;