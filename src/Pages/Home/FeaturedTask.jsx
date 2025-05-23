import React from "react";
import { AuthContext } from "../../Utilities/Auth/AuthProvider";
import { useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const FeaturedTask = ({ sorted }) => {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 mx-auto bg-gray-100 border-1 border-red-500  rounded-md p-4 relative hover:shadow-2xl  ">
       
      <p className="bg-white rounded-full text-red-500 absolute text-bold -mt-6 ml-72  text-sm p-1 ">
        {sorted.category}
      </p>
      <div className="avatar flex gap-4 my-2 items-center">
        <div className="ring-primary ring-offset-base-100 w-12 h-12 rounded-full ring-2 ring-offset-2 ">
          <img
            src={
              "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            }
            alt="User Profile"
          />
        </div>
        <h1 className="font-semi-bold text-black">{sorted.name}</h1>
      </div>

      <h1 className="text-black">💬{sorted.details}</h1>
      <p className="font-semibold text-black">
        💰 Start from : <span> {sorted.budget}Tk</span>
      </p>
      <p className="font-semibold text-black"> 📆 Due: {sorted.date}</p>
       <button onClick={()=>navigate(`/BrowseTask/taskDetails/${sorted._id}`)} className="btn rounded-full w-full bg-red-500 text-white hover:bg-gray-100 hover:text-red-500 my-3"> <FaArrowLeftLong /> View Details</button>
    </div>
  );
};

export default FeaturedTask;
