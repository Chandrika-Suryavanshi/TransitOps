import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <LoginForm />
    </div>
  );
}

export default Login;