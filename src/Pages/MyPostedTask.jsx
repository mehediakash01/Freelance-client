import Swal from "sweetalert2";
import { AuthContext } from "../Utilities/Auth/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

const MyPostedTasks = () => {
  const { user, myTasks, setMyTasks } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(null);

  // Fetch user tasks by email
  useEffect(() => {
    if (user?.email) {
      fetch(`https://freelance-task-marketplace-server-ruddy.vercel.app/myTasks/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTasks(data));
    }
  }, [user]);

  // bid count 

  const handleBidCount = (id)=>{
    if (isClicked === id) {
    setIsClicked(null); 
  } else {
    setIsClicked(id);    
  }
  }

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
        fetch(`https://freelance-task-marketplace-server-ruddy.vercel.app/deleteTask/${id}`, {
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
          <thead className="bg-primary text-secondary font-bold">
            <tr>
              <th>Title</th>
              <th>Budget</th>
              <th>Deadline</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map((task) => (
              <tr key={task._id} className="border">
                <td>{task.taskTitle}</td>
                <td>${task.budget}</td>
                <td>{task.date}</td>

                <td className="flex gap-2 justify-center relative">
                  <Link to={`/dashboard/updateTask/${task._id}`}>
                    <button className="btn btn-sm bg-accent  ">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-sm bg-red-500 text-white "
                  >
                    Delete
                  </button>

                  <button onClick={()=>handleBidCount(task._id)} className="btn btn-sm bg-primary text-white">
                    Bids
                  </button>

                  {isClicked == task._id && 
                    <div className="bg-primary text-secondary p-2 rounded-full flex items-center absolute right-16 ">
                    <FaArrowLeft />  {task.bid}
                    </div>
                    
                    
                  }
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
