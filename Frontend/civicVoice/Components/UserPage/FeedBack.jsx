import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const UserFeedback = () => {
  const [rating, setRating] = useState(0);
  const [emoji, setEmoji] = useState("");
  const [feedback, setFeedback] = useState("");

  const emojis = [
    { label: "Happy", symbol: "😊" },
    { label: "Neutral", symbol: "😐" },
    { label: "Sad", symbol: "😡" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setFeedback("");
    setRating(0);
    setEmoji("");
  };

  return (
    <div className="cursor-pointer max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        Share Your Feedback
      </h2>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Emoji Feedback */}
        <div className="flex justify-center gap-4">
          {emojis.map((e) => (
            <button
              type="button"
              key={e.label}
              onClick={() => setEmoji(e.symbol)}
              className={`text-3xl transition ${
                emoji === e.symbol ? "scale-125" : "opacity-70"
              }`}
            >
              {e.symbol}
            </button>
          ))}
        </div>

        {/* Star Rating */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-2xl transition ${
                rating >= star ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Feedback Text */}
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          rows="3"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="cursor-pointer w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default UserFeedback;
