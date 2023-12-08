import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <h1>Here is a soda: 🥤</h1>
      <Link to="/"> Go back </Link>
    </div>
  );
}

export default Soda;