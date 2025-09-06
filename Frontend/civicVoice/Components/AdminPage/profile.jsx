import React from "react";
import { Edit3, CheckCircle, Clock, LoaderIcon } from "lucide-react";

const AdminProfile = () => {
  const admin = {
    name: "Admin User",
    email: "admin@civicvoice.com",
    role: "Administrator",
    avatar:
      "",
    stats: {
      total: 120,
      resolved: 85,
      pending: 25,
      inProgress: 30
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-6">
        <img
          src={admin.avatar}
          alt="Admin Avatar"
          className="w-24 h-24 rounded-full border-4 border-gray-200"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{admin.name}</h2>
          <p className="text-gray-500">{admin.email}</p>
          <p className="text-sm text-indigo-600 font-medium">{admin.role}</p>
          <button className="mt-3 flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
            <Edit3 size={16} /> Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
          <CheckCircle className="text-green-600" size={28} />
          <div>
            <p className="text-gray-500 text-sm">Resolved Issues</p>
            <h3 className="text-lg font-bold">{admin.stats.resolved}</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
          <Clock className="text-yellow-500" size={28} />
          <div>
            <p className="text-gray-500 text-sm">Pending Issues</p>
            <h3 className="text-lg font-bold">{admin.stats.pending}</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
          <LoaderIcon className="text-blue-600" size={28} />
          <div>
            <p className="text-gray-500 text-sm">InProgress</p>
            <h3 className="text-lg font-bold">{admin.stats.inProgress}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
