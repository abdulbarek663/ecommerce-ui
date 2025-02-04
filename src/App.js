








import './App.css';

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home"

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home setCartCount={setCartCount} />} />
      </Routes>
    </Router>
  );
}

export default App;

