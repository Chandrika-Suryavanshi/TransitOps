import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div
      style={{
        height: "60px",
        background: "#181818",
        borderBottom: "1px solid #333",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <SearchBar />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <span style={{ color: "white" }}>
          Raven K.
        </span>

        <button
          style={{
            background: "#2f80ed",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "20px",
          }}
        >
          Dispatcher
        </button>
      </div>
    </div>
  );
}

export default Navbar;