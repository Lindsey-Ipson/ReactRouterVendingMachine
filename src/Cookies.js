import React from "react";
import { Link } from "react-router-dom";

function Cookies() {
  return (
    <div>
      <h1>Here are some cookies: 🍪🍪🍪</h1>
      <Link to="/"> Go back </Link>
    </div>
  );
}

export default Cookies;