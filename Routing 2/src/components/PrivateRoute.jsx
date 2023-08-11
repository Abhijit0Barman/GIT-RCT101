import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
