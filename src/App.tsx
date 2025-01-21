import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MyNote from "./Pages/MyNote";
import UserManagement from "./Pages/UserManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<MyNote />} />
        <Route path="/user/login" element={<UserManagement type="Login" />} />
        <Route
          path="/user/register"
          element={<UserManagement type="Register" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
