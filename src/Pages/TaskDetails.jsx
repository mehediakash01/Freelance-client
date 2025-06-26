import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const TaskDetails = () => {
  const allTasks = useLoaderData();
  const { _id, taskTitle, details, category, date, budget, bid, taskImg } =
    allTasks;
  const [bidCount, setBidCount] = useState(bid);

  const handleBidCount = () => {
    const newBid = bidCount + 1;
    fetch(
      `https://freelance-task-marketplace-server-ruddy.vercel.app/taskDetails/${_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bid: newBid }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setBidCount(newBid);
          Swal.fire("Success!", "Your bid has been placed.", "success");
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 my-12">
      {/* Bid status heading */}
      <h1 className="bg-primary text-secondary text-center my-10 p-3 rounded-full font-semibold shadow">
        You have placed {bidCount} bid{bidCount !== 1 ? "s" : ""} for this task.
      </h1>

      {/* Card container */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        {/* Image + Category badge */}
        <div className="relative h-72 w-full overflow-hidden">
          <img
            src={taskImg}
            alt={taskTitle}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-primary text-sm font-medium border border-primary shadow">
            🏷️ {category}
          </span>
        </div>

        {/* Task Info */}
        <div className="p-6 md:p-8 space-y-5 text-gray-800">
          <h2 className="text-3xl font-bold">{taskTitle}</h2>

          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">📝 Task Details:</span>{" "}
              <span className="opacity-90">{details}</span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">📅 Deadline:</span>{" "}
              <span className="opacity-90">{date}</span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">💰 Budget:</span>{" "}
              <span className="opacity-90">{budget} TK</span>
            </p>
          </div>

          {/* Bid Button */}
          <button
            onClick={handleBidCount}
            className="w-full bg-primary hover:bg-white text-white hover:text-primary border-2 border-primary font-semibold py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Place Bid ({bidCount})
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
