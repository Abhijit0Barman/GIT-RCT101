import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContextProvider";

function convertNumber(pageNo) {
  pageNo = Number(pageNo);

  if (!pageNo) {
    pageNo = 1;
  }
  return pageNo;
}

export const Users = () => {
  const [apiData, setApiData] = useState({}); // Response store in object
  const [searchParams, setSearchParams] = useSearchParams();
  //useSearchParams() allways come before setPage in (line|order wise)
  // And below useSearchParams() will be useState() of page value
  const [page, setPage] = useState(convertNumber(searchParams.get("page")));
  //                OR
  //const [page, setPage] = useState(1);
  // console.log(typeof searchParams.get("page"));
  // console.log(typeof page);
  const [searchBar, setSearchBar] = useState("");
  // const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    let paramsObj = {
      page: page
    };

    if (searchBar) {
      paramsObj.title = searchBar;
    }
    // setSearchParams({ page: page, title: searchBar });
    setSearchParams(paramsObj);
  }, [page, searchBar]);

  const fetchData = async (page) => {
    try {
      let res = await fetch(`https://reqres.in/api/users?page=${page}`);
      let data = await res.json();
      // console.log(data);
      setApiData(data);
      // setApiData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  // if (!isAuth) {
  //   return <Navigate to="/login" />;
  // }

  // const buttonList = new Array(apiData?.total_pages).fill(0).map((_, index) => (
  //   <button key={index} onClick={() => setPage(index + 1)}>
  //     {index + 1}
  //   </button>
  // ));

  // console.log(searchBar);

  return (
    <>
      {/* {apiData?.total_pages && buttonList} */}
      {apiData?.total_pages &&
        new Array(apiData?.total_pages).fill(0).map((_, index) => (
          <button key={index} onClick={() => setPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      <h1>Current Page : {page}</h1>
      {/* {upper code for pagination} */}
      <input
        type="text"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
        placeholder={`Search......`}
      />
      {/* {upper code for SEARCH-BAR} */}
      {apiData?.data?.map((item) => (
        <div
          key={item.id}
          style={{ border: "2px solid blue", margin: "30px", padding: "20px" }}
        >
          <img src={item.avatar} alt={item.first_name} />
          <h5>Name : {item.first_name}</h5>
          <p>Email : {item.email}</p>
          <Link to={`/users/${item.id}`}>More Info</Link>
        </div>
      ))}
    </>
  );
};

export default Users;
