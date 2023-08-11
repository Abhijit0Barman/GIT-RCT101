import { useContext } from "react";
import { ThemeContext } from "../context/TCP";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        border: "2px solid black",
        height: "50px",
        background: theme === "dark" ? "red" : "yellow",
        color: theme === "light" ? "black" : "white"
      }}
    >
      Footer
    </div>
  );
}

export { Footer };
