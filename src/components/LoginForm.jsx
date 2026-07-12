import Button from "./Button";

function LoginForm() {
  return (
    <div
      style={{
        width: "350px",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>TransitOps Login</h2>

      <input
        type="email"
        placeholder="Email"
        style={inputStyle}
      />

      <input
        type="password"
        placeholder="Password"
        style={inputStyle}
      />

      <Button text="Login" />
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

export default LoginForm;