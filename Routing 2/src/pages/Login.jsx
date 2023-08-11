import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

function Login() {
  const { isAuth, login, logout } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </>
  );
}
export default Login;
