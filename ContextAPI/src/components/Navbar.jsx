import { AppContext } from "../context/CP";
import { useContext } from "react";
import { ThemeContext } from "../context/TCP";

function Navbar() {
  // const val = useContext(AppContext);
  // console.log(val);
  const { isAuth, login, logout } = useContext(AppContext);
  // console.log(isAuth);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        border: "2px solid black",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "20px",
        backgroundColor: theme === "dark" ? "red" : "transparent",
        color: theme === "dark" ? "white" : "black"
      }}
    >
      {/* <h3>Is User Authenticated : {val ? "Yes" : "No"}</h3> */}
      <h3>Is User Authenticated : {isAuth ? "Yes" : "No"}</h3>

      <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
export { Navbar };
