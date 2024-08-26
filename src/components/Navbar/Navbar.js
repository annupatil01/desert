import React from 'react'

import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <span className="brand-name">
      Deserts🍨
      </span>
    <div className="navbar-links">
      <a href="/home" className="navbar-link">Home</a>
      <a href="/contact"  className="navbar-link">Contact</a>
      <a href="/about"  className="navbar-link">About</a>
    </div>
    </div>
  )
}

export default Navbar