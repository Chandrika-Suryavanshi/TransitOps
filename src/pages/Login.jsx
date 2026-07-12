import LoginForm from "../components/LoginForm";

function Login({ setPage }) {
  return (
    <div
      style={{
        height: "100vh",
        background: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm setPage={setPage} />
    </div>
  );
}

export default Login;