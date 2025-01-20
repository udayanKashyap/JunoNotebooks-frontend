import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="mb-4 bg-gray-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          MyApp
        </h1>
        <div className="space-x-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
            onClick={() => navigate("/user")}
          >
            User
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
