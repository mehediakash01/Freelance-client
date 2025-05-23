import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const TaskDetails = () => {
  const allTasks = useLoaderData();
  const { _id, taskTitle, details, category, date, budget, bid } = allTasks;
  const [bidCount, setBidCount] = useState(bid || 0);

  const handleBidCount = () => {
    const newBid = bidCount + 1;

    fetch(`http://localhost:3000/taskDetails/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ bid: newBid }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setBidCount((prev) => prev + 1);
          Swal.fire("Success!", "Your bid has been placed.", "success");
        }
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-12 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>

        <h2 className="text-3xl font-bold mb-4 text-gray-800">{taskTitle}</h2>

        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">📝 Task Details:</span>{" "}
            <span className="opacity-80">{details}</span>
          </p>
          <p>
            <span className="font-semibold">📅 Deadline:</span>{" "}
            <span className="opacity-80">{date}</span>
          </p>
          <p>
            <span className="font-semibold">💰 Budget:</span>{" "}
            <span className="opacity-80">${budget}</span>
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={handleBidCount}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Place Bid ({bidCount})
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
