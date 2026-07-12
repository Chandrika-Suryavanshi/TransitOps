function Navbar() {
  return (
    <nav
      style={{
        height: "60px",
        background: "#1a1a1a",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <h2>TransitOps</h2>

      <input
        type="text"
        placeholder="Search..."
        style={{
          width: "250px",
          padding: "8px",
        }}
      />

      <div>
        <span>👤 Admin</span>
      </div>
    </nav>
  );
}

export default Navbar;