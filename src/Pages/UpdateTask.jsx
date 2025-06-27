import React, { useContext } from "react";
import { AuthContext } from "../Utilities/Auth/AuthProvider";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

const UpdateTask = () => {
  const { user } = useContext(AuthContext);
  const task = useLoaderData();
  const {id} = useParams();

  const {  taskTitle, details, category, date, budget } = task;
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateForm = Object.fromEntries(formData.entries());
   

    
    axios.patch(`https://freelance-task-marketplace-server-ruddy.vercel.app/taskUpdate/${id}`,updateForm).then(res=>{
      console.log(res.data);
       if (res.data.modifiedCount > 0) {
          
          Swal.fire("Updated!", "Your task has been updated.", "success").then(
            () => {
             navigate("/dashboard/myTasks");
            }
          );
        }
    })
      
  };
  return (
    <div className="w-11/12 mx-auto my-10 bg-[#F5F5F5] p-10 rounded-md">
      <form onSubmit={handleUpdate}>
        <h1 className="text-primary text-5xl text-center my-5 font-extrabold">
          Add a New Task
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around gap-3">
          <fieldset className="">
            <label className="mb-2">Task Title</label>
            <br />
            <input
              type="text"
              className="input w-full"
              name="taskTitle"
              placeholder="Task Title"
              required
              defaultValue={taskTitle}
            />
          </fieldset>

          <fieldset className="">
            <label className="mb-2">Category</label>
            <select
              name="category"
              defaultValue={category}
              className="input w-full"
              required
            >
              <option value="" disabled>
                Pick your field
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Content Writing">Content Writing</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Backend Development">Backend Development</option>
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
              required
              defaultValue={details}
            />
          </fieldset>
          <fieldset className="">
            <label>Deadline</label>
            <input
              type="date"
              className="input w-full"
              name="date"
              required
              defaultValue={date}
            />
          </fieldset>
          <fieldset className="">
            <label className="mb-2">budget</label>
            <br />
            <input
              type="text"
              className="input w-full"
              name="budget"
              placeholder="Enter your Budget"
              required
              defaultValue={budget}
            />
          </fieldset>
          <fieldset className="">
            <label className="mb-2">Email</label>
            <br />
            <input
              type="text"
              className="input w-full"
              value={user?.email || ""}
              readOnly
              name="email"
            />
          </fieldset>
          <fieldset className="">
            <label className="mb-2">Name</label>
            <br />
            <input
              type="text"
              className="input w-full"
              value={user?.displayName || " "}
              readOnly
              name="name"
            />
          </fieldset>
        </div>

        <input
          className="btn rounded-full hover:bg-white hover:text-primary bg-primary text-secondary w-full my-3"
          type="submit"
          value="Update Your Selected Task"
        />
      </form>
    </div>
  );
};

export default UpdateTask;
