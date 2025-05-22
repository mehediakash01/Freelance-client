import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const TaskDetails = () => {
    const allTasks = useLoaderData();
   const {_id, taskTitle, details, category, date, budget,bid } = allTasks;
   const [bidCount,setBidCount]=useState(bid||0);
console.log(bidCount,_id);
   const handleBidCount =()=>{
    fetch(`http://localhost:3000/taskDetails/${_id}`, {
        method: 'PATCH',
        headers:{
            'Content-type': 'application/json',
        },
       


    }).then(res=>res.json()).then(data=>{

        if(data.modifiedCount > 0){
            setBidCount(bidCount+1);
             Swal.fire('Success!', 'Your bid has been placed.', 'success');
        }
    })

   }
  return (
    <div className="card w-96 mx-auto my-12 bg-[#F5F5F5] shadow-sm hover:shadow-2xl">
      <div className="card-body">
        <span className="badge badge-xs bg-red-500 text-white">{category}</span>
        
          <h2 className="text-2xl font-bold    rounded-full">{taskTitle}</h2>
         
      
        <div className="">
          <h2 className="text-2xl font-bold">Task-details: <span className="opacity-50 text-md">{details}</span></h2>
          <p className="text-2xl font-bold">Deadline:<span className="opacity-50 text-md"> {date}</span></p>
          <p className="text-2xl font-bold">Budget:<span className="opacity-50 text-md"> {budget}</span></p>
          
        </div>
     
        <div className="mt-6">
          <button onClick={handleBidCount} className="btn bg-red-500 text-white hover:bg-white hover:text-red-500 rounded-full  btn-block">Number of Bid: {bidCount}</button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
