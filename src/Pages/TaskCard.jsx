import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router";
const TaskCard = ({ task }) => {
     const navigate = useNavigate();
   
   
  const {_id, taskTitle, details, category, date, budget } = task;
  return <div className="border-red-500 border-1  rounded-2xl w-11/12 mx-auto p-4 my-5 hover:shadow-2xl relative">
     <p className="bg-white rounded-full text-red-500 absolute text-bold -mt-6  text-sm p-1 ">{category}</p>
  <div className="space-y-2 my-4" >
    <p className="text-bold text-black ">Task:<span className="opacity-50">{taskTitle}</span></p>
    <p className="text-bold text-black ">Task-Details:<span className="opacity-50">{details}</span></p>
    <p className="text-bold text-black ">Deadline:<span className="opacity-50">{date}</span></p>
    <p className="text-bold text-black ">Total:<span className="opacity-50">{budget} tk</span></p>
  </div>
 
 <button onClick={()=>navigate(`/BrowseTask/taskDetails/${_id}`)} className="btn rounded-full w-full bg-red-500 text-white hover:bg-gray-100 hover:text-red-500"> <FaArrowLeftLong /> View Details</button>

  </div>;
};

export default TaskCard;
