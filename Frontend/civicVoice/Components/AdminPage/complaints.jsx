import React, { useState } from "react";
import {
  ArrowUpWideNarrow,
  FileText,
  ListChecks,
  Layers,
} from "lucide-react";

const AdminComplaints = () => {
  const [complaints] = useState([
    {
      id: 1,
      title: "Streetlight not working",
      description: "Main road lights have been out for 2 weeks.",
      upvotes: 15,
      status: "Pending",
      category: "Infrastructure",
    },
    {
      id: 2,
      title: "Garbage not collected",
      description: "Garbage in Sector 5 is overflowing.",
      upvotes: 30,
      status: "In Progress",
      category: "Sanitation",
    },
    {
      id: 3,
      title: "Water supply issue",
      description: "Low water pressure in the mornings.",
      upvotes: 10,
      status: "Resolved",
      category: "Utilities",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Dashboard Title */}
      <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-2 text-gray-800">
        Complaints Dashboard
      </h2>

      <div className="overflow-x-auto rounded-2xl shadow-lg">
        <table className="min-w-full border-collapse bg-white">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100 text-left text-base font-bold text-gray-800">
              <th className="p-4 border-b">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>Complaint</span>
                </div>
              </th>
              <th className="p-4 border-b">
                <div className="flex items-center gap-2">
                  <ArrowUpWideNarrow className="w-5 h-5 text-green-600" />
                  <span>Upvotes</span>
                </div>
              </th>
              <th className="p-4 border-b">
                <div className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-yellow-600" />
                  <span>Status</span>
                </div>
              </th>
              <th className="p-4 border-b">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  <span>Category</span>
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {complaints.map((c) => (
              <tr
                key={c.id}
                className="hover:bg-gray-50 transition text-sm border-b"
              >
                {/* Complaint */}
                <td className="p-4">
                  <div className="font-semibold text-gray-800">{c.title}</div>
                  <div className="text-gray-600 text-xs">{c.description}</div>
                </td>

                {/* Upvotes */}
                <td className="p-4 text-green-700 font-medium">{c.upvotes}</td>

                {/* Status */}
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

                {/* Category */}
                <td className="p-4 text-indigo-700 font-medium">{c.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminComplaints;
