import React from "react";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h1>Here are some chips: 🍟</h1>
      <Link to="/"> Go back </Link>
    </div>
  );
}

export default Chips;