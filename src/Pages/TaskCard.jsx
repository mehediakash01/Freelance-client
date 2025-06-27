import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  const { _id, taskTitle, details, category,  budget, taskImg } = task;

  return (
    <div className="w-full max-w-md mx-auto bg-white border border-accent rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden">
      
      {/* Image Section */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={taskImg}
          alt={taskTitle}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3 relative">

        {/* Category Badge */}
        <span className="absolute -top-3 left-4 bg-white border border-accent text-primary text-xs px-3 py-1 rounded-full shadow-sm">
          🏷️ {category}
        </span>

        <h3 className="text-lg font-semibold text-black line-clamp-1">
          🧾 {taskTitle}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {details.slice(0, 60)}...
        </p>

        <div className="text-sm font-medium text-black space-y-1">
          {/* <p>⏰ Deadline: <span className="text-gray-600">{date}</span></p> */}
          <p>💸 Budget: <span className="text-gray-600">{budget} TK</span></p>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => navigate(`/BrowseTask/taskDetails/${_id}`)}
          className="mt-4 w-full btn rounded-full bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-primary flex items-center justify-center gap-2 transition"
        >
          View Details <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
