import React, { useEffect, useState } from "react";
import { Edit3, CheckCircle, Clock, LoaderIcon } from "lucide-react";
import axios from "axios";

const AdminProfile = () => {
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if(!token) return;

        const res = await axios.get("https://civicvoice-frontend.onrender.com/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) return;
    const fetchStats = async () => {
      try {
        
        const res = await axios.get("https://civicvoice-frontend.onrender.com/api/complaint/getStats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stats:", error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold text-gray-600">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Card */}
      {profile && (
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-6">
          <img
            src={profile.avatar || "https://via.placeholder.com/150"}
            alt="Admin Avatar"
            className="w-24 h-24 rounded-full border-4 border-gray-200"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
            <p className="text-gray-500">{profile.email}</p>
            <p className="text-sm text-indigo-600 font-medium">{profile.role}</p>
            <button className="mt-3 flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
              <Edit3 size={16} /> Edit Profile
            </button>
          </div>
        </div>
      )}

      {/* Stats Section */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
            <CheckCircle className="text-purple-600" size={28} />
            <div>
              <p className="text-gray-500 text-sm">Total Issues</p>
              <h3 className="text-lg font-bold">{stats.total}</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
            <CheckCircle className="text-green-600" size={28} />
            <div>
              <p className="text-gray-500 text-sm">Resolved Issues</p>
              <h3 className="text-lg font-bold">{stats.resolved}</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
            <Clock className="text-yellow-500" size={28} />
            <div>
              <p className="text-gray-500 text-sm">Pending Issues</p>
              <h3 className="text-lg font-bold">{stats.pending}</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
            <LoaderIcon className="text-blue-600" size={28} />
            <div>
              <p className="text-gray-500 text-sm">In Progress</p>
              <h3 className="text-lg font-bold">{stats.inProgress}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
