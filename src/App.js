import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Cookies from "./Cookies";
import Soda from "./Soda";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/soda" element={<Soda />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
