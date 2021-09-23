import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="contact">Contact</Link>
      <Link to="/services">Services</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default NavBar;
