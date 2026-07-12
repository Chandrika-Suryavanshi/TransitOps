function LoginForm({ setPage }) {
  const handleLogin = (e) => {
    e.preventDefault();

    // Navigate to Dashboard
    setPage("dashboard");
  };

  return (
    <div
      style={{
        width: "420px",
        backgroundColor: "#1a1a1a",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.4)",
        color: "white",
      }}
    >
      <h1 style={{ marginBottom: "5px" }}>Sign In</h1>

      <p style={{ color: "#bdbdbd", marginBottom: "25px" }}>
        Enter your credentials
      </p>

      <form onSubmit={handleLogin}>
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "18px",
            borderRadius: "6px",
            border: "1px solid #555",
          }}
        />

        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "18px",
            borderRadius: "6px",
            border: "1px solid #555",
          }}
        />

        <label>Role</label>
        <br />
        <select
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "25px",
            borderRadius: "6px",
            border: "1px solid #555",
          }}
        >
          <option>Fleet Manager</option>
          <option>Dispatcher</option>
          <option>Safety Officer</option>
          <option>Financial Analyst</option>
        </select>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#d48b06",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;