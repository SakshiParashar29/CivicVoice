import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import AdminPage from "../Components/AdminPage/Admin.jsx"
import UserPage from "../Components/UserPage/User.jsx"

const SignIn = ({setActiveForm}) => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const dummyUsers = [
    { username: "user1", password: "user123", role: "user" },
    { username: "admin1", password: "admin123", role: "admin" },
  ];


  const handleSubmit = (e) => {
    e.preventDefault()
    if(!username || !password || !role){
      alert("Invalid credentials");
      return;
    }

    const user = dummyUsers.find(
      (u) => u.username === username && u.password === password && u.role === role
    );

    if(user){
      if(role === "admin")
        navigate('/admin');
      else if(role === "user")
        navigate('/user');
    }else{
      alert("Invalid credentials!!")
    }
  }
  return (
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
        
        <form className="space-y-4">
          {/* Email or Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email / Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
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
            onClick={handleSubmit}
            type="button"
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
