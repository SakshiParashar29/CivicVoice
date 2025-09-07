import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const SignIn = ({ setActiveForm }) => {

  const [identification, setidentification] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    localStorage.removeItem("token");

    if (!identification || !password) {
      alert("Enter the necessary credentials");
      return;
    }

    try {
      const response = await axios.post('https://civicvoice-frontend.onrender.com/api/users/signin', {
        identification,
        password
      });

      if (response.data.success) {
        const { token, user} = response.data.data;
        localStorage.setItem("token", token);
        setidentification('');
        setPassword('');
        if (user.role === "admin") navigate("/admin");
        else navigate("/user");
      }
      else {
        alert("SignIn failed!");
      }
    } catch (error) {
      console.log("error occured : ", error);
      alert("Something went wrong. Try again!");
    }
  }
  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>

      <form className="space-y-4" onSubmit={submitForm}>
        {/* Email or Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email / Username</label>
          <input
            type="text"
            value={identification}
            onChange={(e) => setidentification(e.target.value)}
            placeholder="Enter your email or username"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select name="state" value={role} onChange={(e) => setRole(e.target.value)}
            id="states"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option value="">---Select Role----</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>


        {/* Submit */}
        <button
          type="submit"
          className="cursor-pointer w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 mt-1"
        >
          Sign In
        </button>
      </form>

      {/* Sign up redirect */}
      <p className="mt-6 text-center text-sm text-gray-600 cursor-pointer">
        Don't have an account?{" "}
        <span
          className="text-blue-600 hover:underline"
          onClick={() => setActiveForm("signup")}
        >
          Sign Up
        </span>
      </p>
    </div>
  )
}

export default SignIn
