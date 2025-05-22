


import Swal from "sweetalert2";
import { AuthContext } from "../Utilities/Auth/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

const MyPostedTasks = () => {
  const { user } = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);

  // Fetch user tasks by email
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myTasks/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTasks(data));
    }
  }, [user]);

  // Delete Task
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/deleteTask/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
              setMyTasks(myTasks.filter((task) => task._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-6">My Posted Tasks</h1>

      <div className="overflow-x-auto">
        <table className="table w-full text-center border">
          <thead className="bg-red-400 text-white font-bold">
            <tr>
              <th>Title</th>
              <th>Budget</th>
              <th>Deadline</th>
              <th>Bids</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map((task) => (
              <tr key={task._id} className="border">
                <td>{task.taskTitle}</td>
                <td>${task.budget}</td>
                <td>{task.date}</td>
                <td>{task.bid || 0}</td>
                <td className="flex gap-2 justify-center">
                  <Link to={`/updateTask/${task._id}`}>
                    <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <Link to={`/taskDetails/${task._id}`}>
                    <button className="btn btn-sm bg-green-500 text-white hover:bg-green-600">
                      Bids
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedTasks;
