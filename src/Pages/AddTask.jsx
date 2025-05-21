import React, { useContext } from "react";
import { AuthContext } from "../Utilities/Auth/AuthProvider";

const AddTask = () => {
    const {user}=useContext(AuthContext);

    const handleTasks =(e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData (form);
        const taskData = Object.fromEntries(formData.entries());
   
    }
  return (
    <div className="w-11/12 mx-auto my-10">
      <form onSubmit={handleTasks}>
        <h1 className="text-red-500 text-5xl text-center my-5 font-extrabold">Add a New Task</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around gap-3">
          <fieldset className="">
            <label className="mb-2">Task Title</label>
            <br />
            <input
              type="text"
              className="input w-full"
              name="taskTitle"
              placeholder="Task Title"
            />
          </fieldset>

          <fieldset className="">
            <label className="mb-2">category</label>
            <select defaultValue="Pick an AI Model" className=" input  w-full">
              <option disabled={true}>Pick your filed</option>
              <option>web-development</option>
              <option>graphic design</option>
              <option>writing marketing</option>
            </select>
          </fieldset>

          <fieldset className="">
            <label className="mb-2">Description</label>
            <br />
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Explain your work in details"
            />
          </fieldset>
          <fieldset className="">
            <label>Deadline</label>
            <input type="date" className="input w-full" name="date" />
          </fieldset>
          <fieldset className="">
            <label className="mb-2">budget</label>
            <br />
            <input
              type="text"
              className="input w-full"
              name="budget"
              placeholder="Enter your Budget"
            />
          </fieldset>
          <fieldset className="">
            <label className="mb-2">Email</label>
            <br />
            <input type="text" className="input w-full" value={user?.email || " "} readOnly />
          </fieldset>
          <fieldset className="">
            <label className="mb-2">Name</label>
            <br />
            <input type="text" className="input w-full" value={user?.displayName || " "} readOnly />
          </fieldset>
        </div>

        <input
          className="btn bg-red-500 text-white w-full my-3"
          type="submit"
          value="Add Your Selected Task"
        />
      </form>
    </div>
  );
};

export default AddTask;
