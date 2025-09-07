import React, { useState } from "react";
import { FaBullhorn } from "react-icons/fa";

const HeroSection = () => {
  const [complaint, setComplaint] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setComplaint({ ...complaint, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://civicvoice-4.onrender.com/api/complaint/save-complaint", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}` 
      },
      body: JSON.stringify(complaint),
    });

    const data = await res.json();

    if (data.success) {
      alert("Your complaint has been submitted successfully!");
      setComplaint({ title: "", description: "", category: "" });
    } else {
      alert("Failed to submit complaint: " + data.message);
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Try again!");
  }
};


  return (
    <section className="bg-gradient-to-r from-blue-50 to-orange-50 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Content */}
      <div className="text-center max-w-3xl mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaBullhorn className="text-[#F97316] text-4xl" />
          <h1 className="text-5xl font-extrabold tracking-tight">
            <span className="text-[#1E3A8A]">Civic</span>
            <span className="text-[#F97316]">Voice</span>
          </h1>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Empower your community by raising your voice. Report issues, track
          their status, and create change together. Every complaint counts —
          let's build a better society.
        </p>
      </div>

      {/* Complaint Form */}
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Submit a Complaint
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Complaint Title
            </label>
            <input
              type="text"
              name="title"
              value={complaint.title}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Eg: Streetlight not working"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={complaint.description}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              rows="4"
              placeholder="Describe the issue in detail..."
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Category
            </label>
            <select
              name="category"
              value={complaint.category}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            >
              <option value="">-- Select a Category --</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Sanitation">Sanitation</option>
              <option value="Utilities">Utilities</option>
              <option value="Safety">Safety</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#F97316] text-white font-semibold py-3 rounded-lg hover:bg-[#ea580c] transition"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
