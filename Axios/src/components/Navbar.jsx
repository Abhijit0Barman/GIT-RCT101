import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/add-item">ADD ITEM</Link>
    </div>
  )
}

export default Navbar