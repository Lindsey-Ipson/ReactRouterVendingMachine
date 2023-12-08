import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/"> vending machine </Link>
      <Link to="/chips"> chips </Link>
      <Link to="/cookies"> cookies </Link>
      <Link to="/soda"> soda </Link>
    </nav>
  );
}

export default NavBar;