function DriverForm() {
  return (
    <form>
      <input type="text" placeholder="Driver Name" />
      <br /><br />

      <input type="text" placeholder="Phone Number" />
      <br /><br />

      <input type="text" placeholder="License Number" />
      <br /><br />

      <button type="submit">Add Driver</button>
    </form>
  );
}

export default DriverForm;