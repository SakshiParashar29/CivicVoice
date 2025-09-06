import React, { useState } from 'react'
import { FaFistRaised, FaMoon, FaSun, FaBell, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  const [dark, setTheme] = useState(false)

  const toggle = () => {
    setTheme(!dark)
  }

  return (
    <div
      className={`p-4 shadow-md rounded transition-colors duration-300  bg-[#F9FAFB] text-gray-900`}
    >
      <div className="flex justify-between items-center">
        {/* Brand */}
        <div className="flex gap-2 items-center">
          <FaFistRaised className="w-6 h-6 text-[#F97316]" />
          <h2 className="text-2xl font-bold">
            <span className="text-[#1E3A8A]">Civic</span>
            <span className="text-[#F97316]">Voice</span>
          </h2>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 pr-4">
          {/* Theme Toggle */}
          <button
            onClick={toggle}
            className="hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            {dark ? (
              <FaSun className="w-6 h-6" />
            ) : (
              <FaMoon className="w-6 h-6 text-blue-950" />
            )}
          </button>

          {/* Notifications */}
          <button
            className="relative hover:scale-110 transition-transform"
            aria-label="Notifications"
          >
            <FaBell className="w-6 h-6" />
          </button>

          {/* Profile */}
          <button
            className="hover:scale-110 transition-transform"
            aria-label="User Profile"
          >
            <FaUserCircle className="w-8 h-8 hover:text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
