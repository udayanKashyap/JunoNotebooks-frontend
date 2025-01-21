import axios, { AxiosError } from "axios";
import { useState } from "react";
import useUserStore from "../store/userStore";

const UserManagement = ({ type }: { type: string }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const loginUser = useUserStore((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type == "Register") {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/user/register/`,
          {
            username: formData.username,
            password: formData.password,
          },
        );
        console.log(res.data);
      } catch (error) {
        if (error instanceof AxiosError) console.log(error.message);
      }
    } else if (type == "Login") {
      console.log("logging in");
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/user/login/`,
          {
            username: formData.username,
            password: formData.password,
          },
        );
        loginUser(res.data);
      } catch (error) {
        if (error instanceof AxiosError) console.log(error.message);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">{type}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-10 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {type}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserManagement;
