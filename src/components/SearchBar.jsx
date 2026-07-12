function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search..."
      style={{
        width: "250px",
        padding: "8px 12px",
        borderRadius: "6px",
        border: "1px solid #555",
        background: "#1f1f1f",
        color: "white",
        outline: "none",
      }}
    />
  );
}

export default SearchBar;