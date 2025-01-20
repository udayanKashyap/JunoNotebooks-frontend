import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import MyNote from "./Pages/MyNote";
import UserRegistration from "./Pages/UserRegistration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<MyNote />} />
        <Route path="/user" element={<UserRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
