import React from 'react'
import {useNavigate} from "react-router-dom"

const SignIn = () => {
  return (
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
        
        <form className="space-y-4">
          {/* Email or Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email / Username</label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select name="state"
              id="states"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="">---Select Role----</option>
              <option value="">User</option>
              <option value="">Admin</option>
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
          <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </div>
  )
}

export default SignIn
