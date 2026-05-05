import React from "react";
import { Link } from "react-router-dom";
import "../App.css";   


function Navbar() {
  return (
    <div className="navbar">
       <Link to="/" className="logo">
        Diamond Website Demo
      </Link>
      
 <div className="nav-links">
        <Link to="/sustainable">SUSTAINABLE PROCESS</Link>
        <Link to="/stories">STORIES & HIGHLIGHTS</Link>
        <Link to="/csr">CSR</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/careers">CAREERS</Link>
        <Link to="/contact">CONTACT</Link>
       </div>
    </div>
  );
}

export default Navbar;