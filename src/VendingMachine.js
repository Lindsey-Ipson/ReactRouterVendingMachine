import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h1>HELLO WELCOME TO THE VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
      <p>How about some <Link to="/chips"> chips? </Link> </p>
      <p>How about some <Link to="/cookies"> cookies? </Link> </p>
      <p>How about a <Link to="/soda"> soda? </Link> </p>
    </div>
  );
}

export default VendingMachine;