// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AllLinks = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
  { text: "Users", path: "/users" },
  { text: "Login", path: "/login" }
];

function Navbar() {
  const defaultStyle = { textDecoration: "none", color: "black" };
  const activeStyle = { textDecoration: "none", color: "red" };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "10px",
        backgroundColor: "lightgray"
      }}
    >
      {AllLinks.map(({ path, text }) => (
        <NavLink
          to={path}
          key={path}
          style={({ isActive }) => {
            return isActive ? activeStyle : defaultStyle;
          }}
        >
          {text}
        </NavLink>
      ))}
      {/* OR  */}
      {/* {AllLinks.map(() => (
        <Link to={item.path}>{item.text}</Link>
      ))} */}
      {/* OR  */}
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link> */}
    </div>
  );
}

export default Navbar;
