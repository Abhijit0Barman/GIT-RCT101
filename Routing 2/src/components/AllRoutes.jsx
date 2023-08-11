import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route path="/users/:user_id" element={<UserDetails />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;
