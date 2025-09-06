import React, { useEffect, useState } from "react";
import SignInForm from "./SignIn.jsx";
import SignUpForm from "./SignUp.jsx";

const AuthPage = () => {
  const [activeForm, setActiveForm] = useState("signin");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 h-screen">
      {/* Main Container */}
      <div className="w-full max-w-md bg-white mt-5 mb-4 shadow-lg rounded-xl">
        {/* Headings */}
        <div className="flex">
          <h2
            className={`cursor-pointer text-xl font-semibold flex-1 text-center py-4 ${
              activeForm === "signin" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveForm("signin")}
          >
            Sign In
          </h2>
          <h2
            className={`cursor-pointer text-xl font-semibold flex-1 text-center py-4 ${
              activeForm === "signup" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveForm("signup")}
          >
            Sign Up
          </h2>
        </div>

        {/* Form Container */}
        <div className="px-6 py-6">
          {activeForm === "signin" ? <SignInForm setActiveForm={setActiveForm} /> : <SignUpForm setActiveForm={setActiveForm} />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
