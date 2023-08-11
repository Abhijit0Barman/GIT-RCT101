import { useContext } from "react";
import { ThemeContext } from "../context/TCP";

function Sidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ gridColumn: "span 2" }}>
      <div
        style={{
          height: "456px",
          background: theme === "dark" ? "blue" : "inherit",
          border: theme === "dark" ? "1px solid whitesmoke" : "1px solid black",
          color: theme === "dark" ? "whitesmoke" : "black"
        }}>
        <h4>Sidebar</h4>
        <button onClick={toggleTheme}>TOGGLE THEME</button>
      </div>
    </div>
  );
}
export { Sidebar };
