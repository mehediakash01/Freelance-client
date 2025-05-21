import React, { useContext } from "react";
import { AuthContext } from "../Utilities/Auth/AuthProvider";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = useContext(AuthContext);

  const handleTasks = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());
    // send data to database
    fetch("http://localhost:3000/addTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task has successfully added",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        form.reset();
      });
  };
  return (
    <div className="w-11/12 mx-auto my-10 bg-[#F5F5F5] p-10 rounded-md">
      <form onSubmit={handleTasks}>
        <h1 className="text-red-500 text-5xl text-center my-5 font-extrabold">
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
            />
          </fieldset>

          <fieldset className="">
            <label className="mb-2">Category</label>
            <select
              name="category"
              defaultValue=""
              className="input w-full"
              required
            >
              <option value="" disabled>
                Pick your field
              </option>
              <option value="web-development">Web Development</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="writing-marketing">Writing & Marketing</option>
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
            />
          </fieldset>
          <fieldset className="">
            <label>Deadline</label>
            <input type="date" className="input w-full" name="date" required />
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
            />
          </fieldset>
          <fieldset className="">
            <label className="mb-2">Email</label>
            <br />
            <input
              type="text"
              className="input w-full"
              value={user?.email || " "}
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
          className="btn rounded-full hover:bg-white hover:text-red-500 bg-red-500 text-white w-full my-3"
          type="submit"
          value="Add Your Selected Task"
        />
      </form>
    </div>
  );
};

export default AddTask;
