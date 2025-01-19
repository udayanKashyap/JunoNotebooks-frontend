import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import MyNote from "./Pages/MyNote";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<MyNote />} />
      </Routes>
    </Router>
  );
}

export default App;
