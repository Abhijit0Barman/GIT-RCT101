import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

function UserDetails() {
  const [user, setUser] = useState({});
  const { isAuth } = useContext(AuthContext);
  // const params = useParams();
  // console.log(params.user_id);

  const { user_id } = useParams();

  const fetchData = async (user_id) => {
    try {
      let res = await fetch(`https://reqres.in/api/users/${user_id}`);
      let data = await res.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(user_id);
  }, [user_id]);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid red",
        margin: "20px",
        padding: "20px",
        alignItems: "center",
        background: "darkgreen",
        color: "lavender"
      }}
    >
      <img src={user?.data?.avatar} alt="" />
      <p>ID: {user?.data?.id}</p>
      <p>
        NAME:
        {user?.data?.first_name} {user?.data?.last_name}
      </p>
      <p>EMAIL: {user?.data?.email}</p>
      <p>URL: {user?.support?.url}</p>
      <p>GOAL: {user?.support?.text}</p>
    </div>
  );
}
export default UserDetails;