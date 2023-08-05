import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import React from 'react'
import AddItem from "../pages/AddItem";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </>
  )
}

export default AllRoutes