import { useContext } from "react";
import { ThemeContext } from "../context/TCP";

function Main() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ gridColumn: "span 3" }}>
      <div
        style={{
          height: "456px",
          background: theme === "dark" ? "yellow" : "darkgreen",
          color: theme === "dark" ? "black" : "white",
          marginBottom: "5px"
        }}
      >
        Main
      </div>
    </div>
  );
}
export { Main };
