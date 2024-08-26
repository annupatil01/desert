import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <span className="brand-name">
      Deserts🍨
      </span>
    <div className="navbar-links">

      <Link to="/home" className="navbar-link">
         Home
      </Link>

      <Link to="/contact"  className="navbar-link">
         Contact
      </Link>

      <Link to="/about"  className="navbar-link">
         About
      </Link>

    </div>
    </div>
  )
}

export default Navbar