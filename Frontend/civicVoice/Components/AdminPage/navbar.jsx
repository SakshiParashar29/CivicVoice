import React, { useState } from "react";
import { FaFistRaised, FaMoon, FaSun, FaBell, FaUserCircle } from "react-icons/fa";

const DashboardNavbar = () => {
  const [dark, setDark] = useState(true);

  return (
    <header className="shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand with icon */}
        <div className="flex items-center gap-3">
          <FaFistRaised className="w-8 h-8 text-[#F97316]" />
          <h1 className="text-3xl font-extrabold tracking-wide">
            <span className="text-[#1E3A8A]">Civic</span>
            <span className="text-[#F97316]">Voice</span>
          </h1>
        </div>

        {/* Actions */}
        <nav className="flex items-center gap-6 text-2xl">
          <button
            onClick={() => setDark(!dark)}
            className="hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="relative hover:scale-110 transition-transform"
            aria-label="Notifications"
          >
            <FaBell />
          </button>

          <button
            className="hover:scale-110 transition-transform"
            aria-label="User profile"
          >
            <FaUserCircle className="text-4xl" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default DashboardNavbar;
