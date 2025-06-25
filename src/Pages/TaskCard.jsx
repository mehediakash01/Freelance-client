import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  const { _id, taskTitle, details, category, date, budget } = task;

  return (
    <div className="border border-accent rounded-2xl w-11/12 mx-auto p-5 my-5 hover:shadow-2xl relative bg-white">
      {/* Category Badge */}
      <span className="bg-white border border-accent rounded-full text-primary px-3 py-1 text-xs absolute -top-3 left-4">
        🏷️ {category}
      </span>

      <div className="space-y-2 mt-4">
        <p className="font-semibold text-black">
          🧾 Task: <span className="text-gray-600">{taskTitle}</span>
        </p>
        <p className="font-semibold text-black">
          📝 Details:{" "}
          <span className="text-gray-600">
            {details.length > 50 ? details.slice(0, 50) + "..." : details}
          </span>
        </p>
        <p className="font-semibold text-black">
          ⏰ Deadline: <span className="text-gray-600">{date}</span>
        </p>
        <p className="font-semibold text-black">
          💸 Budget: <span className="text-gray-600">{budget} TK</span>
        </p>
      </div>

      {/* View Details Button */}
      <button
        onClick={() => navigate(`/BrowseTask/taskDetails/${_id}`)}
        className="mt-4 btn rounded-full w-full bg-primary text-secondary hover:bg-white hover:text-primary border hover:border-accent flex items-center justify-center gap-2"
      >
        View Details <FaArrowRightLong />
      </button>
    </div>
  );
};

export default TaskCard;
