import React from "react";
import { useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const FeaturedTask = ({ sorted }) => {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 mx-auto h-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-primary bg-red-100 px-3 py-1 rounded-full">
            {sorted.category}
          </span>
         
        </div>

        <div className="flex items-center gap-2 mb-3 text-gray-700 font-medium">
          <FaUser />
          <span>Posted by: {sorted.name}</span>
        </div>

            <p className="text-gray-800 mb-3">
          💬 {sorted.details?.slice(0, 80)}...
        </p>

        <p className="text-gray-800 font-semibold">
          💰 Budget: <span className="text-black">{sorted.budget} Tk</span>
        </p>
      </div>

      <button
        onClick={() => navigate(`/BrowseTask/taskDetails/${sorted._id}`)}
        className="w-full mt-6 flex items-center justify-center gap-2 bg-primary hover:bg-primary text-secondary font-medium py-2 rounded-full transition duration-300"
      >
        <FaArrowLeftLong />
        View Details
      </button>
    </div>
  );
};

export default FeaturedTask;
