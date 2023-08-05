import React, { useEffect, useReducer } from 'react'
import axios from "axios"
import DataCard from "../components/DataCard";
//useReducer(reducer,initState)
const initState = { loading: false, data: [], err: false }

const reducer = (state, action) => {
  switch (action.type) {
    //1st dispatch call
    case "RESTAURANTS_LOADING": {
      return {
        loading: true,
        err: false,
        data: [],
        //  OR-> ...state,loading:true
      }
    }
    //2nd dispatch call
    case "RESTAURANTS_SUCCESS": {
      return {
        loading: false,
        err: false,
        data: action.payload,
      }
    }
    //3rd dispatch call
    case "RESTAURANTS_ERROR": {
      return {
        loading: false,
        err: true,
        data: [],
      }
    }
    default: {
      throw new Error(`invalid action type`)
    }
  }
}
const Home = () => {
  //loading, data, err
  const [state, dispatch] = useReducer(reducer, initState)

  const fetchData = () => {
    //1st dispatch
    dispatch({ type: "RESTAURANTS_LOADING" })
    axios
      .get(`http://localhost:8080/restaurants`)
      .then(res => {
        // console.log(apiData)
        const apiData = res?.data;
        //2nd dispatch
        dispatch({
          type: "RESTAURANTS_SUCCESS",
          payload: apiData,
        })
      })
      .catch(err => {
        //3rd dispatch
        dispatch({
          type: "RESTAURANTS_ERROR"
        })
      })
  }
  useEffect(() => {
    fetchData()
  }, []);

  if (state.loading) {
    return (
      <>
        <h1>Loading...</h1>
        <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" />
      </>
    )
  }
  if (state.err) {
    return (
      <>
        <h1>Something Went Wrong...</h1>
        <img src="https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.webp" alt="" />
      </>
    )
  }
  return (
    <>
      <div>Restaurants List</div>
      {
        state?.data?.map((item) => (
          <DataCard key={item.id} {...item} />
        ))
      }
    </>
  )
}
export default Home//axios all ways return object form of data {}
//but fetch return anything like obj of obj {{},{}} or arr of obj [{},{}]