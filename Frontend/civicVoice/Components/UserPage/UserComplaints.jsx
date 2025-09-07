import React, { useEffect, useState } from "react";

const UserComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [userVotes, setUserVotes] = useState(new Set());

  // Fetch complaints from backend
  const fetchComplaints = async () => {
    try {
      const res = await fetch("https://civicvoice-frontend.onrender.com/api/complaint/get-complaints", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (data.success) setComplaints(data.data);
    } catch (err) {
      console.error("Error fetching complaints:", err);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // Handle upvote
  const handleUpvote = async (id) => {
    if (userVotes.has(id)) return;

    try {
      const res = await fetch(`https://civicvoice-frontend.onrender.com/api/complaint/update-upvote/${id}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();

      if (data.success) {
        setComplaints((prev) =>
          prev.map((c) =>
            c._id === id ? { ...c, upvotes: c.upvotes + 1 } : c
          )
        );
        setUserVotes((prev) => new Set(prev).add(id));
      } else {
        alert("Failed to upvote: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while upvoting!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
        User Complaints
      </h2>

      <div className="overflow-x-auto rounded-2xl shadow-lg">
        <table className="min-w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100 text-left text-base font-bold text-gray-800">
              <th className="p-4 border-b">Complaint</th>
              <th className="p-4 border-b">Upvotes</th>
              <th className="p-4 border-b">Status</th>
              <th className="p-4 border-b">Category</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((c) => (
              <tr key={c._id} className="hover:bg-gray-50 transition text-sm border-b">
                <td className="p-4">
                  <div className="font-semibold text-gray-800">{c.title}</div>
                  <div className="text-gray-600 text-xs">{c.description}</div>
                </td>

                <td className="p-4">
                  <button
                    onClick={() => handleUpvote(c._id)}
                    disabled={userVotes.has(c._id)}
                    className={`flex items-center gap-2 px-3 py-1 rounded-lg font-medium transition cursor-pointer
                      ${
                        userVotes.has(c._id)
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-gray-100 hover:bg-gray-200 text-green-700"
                      }`}
                  >
                    {c.upvotes}
                  </button>
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      c.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : c.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

                <td className="p-4 text-indigo-700 font-medium">{c.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserComplaints;
