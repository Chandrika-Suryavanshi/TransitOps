import { useState } from "react";

function VehicleForm({ addVehicle }) {

  const [vehicle, setVehicle] = useState({
    number: "",
    model: "",
    type: ""
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    addVehicle(vehicle);

    setVehicle({
      number: "",
      model: "",
      type: ""
    });
  };


  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Vehicle Number"
        value={vehicle.number}
        onChange={(e)=>setVehicle({...vehicle,number:e.target.value})}
      />

      <br/><br/>

      <input
        placeholder="Model"
        value={vehicle.model}
        onChange={(e)=>setVehicle({...vehicle,model:e.target.value})}
      />

      <br/><br/>

      <input
        placeholder="Vehicle Type"
        value={vehicle.type}
        onChange={(e)=>setVehicle({...vehicle,type:e.target.value})}
      />

      <br/><br/>

      <button>Add Vehicle</button>

    </form>
  );
}

export default VehicleForm;