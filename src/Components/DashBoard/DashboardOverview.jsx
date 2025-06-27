import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Utilities/Auth/AuthProvider";

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);

  // ✅ Fetch user's own tasks
  useEffect(() => {
    if (user?.email) {
      const encodedEmail = encodeURIComponent(user.email); // 🔒 encode email
      fetch(`http://localhost:3000/myTasks/${encodedEmail}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch user tasks");
          return res.json();
        })
        .then((data) => setMyTasks(data))
        .catch((err) => console.error("Error fetching myTasks:", err));
    }
  }, [user]);

  // ✅ Fetch all tasks
  useEffect(() => {
    fetch("http://localhost:3000/allTasks")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch all tasks");
        return res.json();
      })
      .then((data) => setAllTasks(data))
      .catch((err) => console.error("Error fetching allTasks:", err));
  }, []);

  const totalBids = allTasks.reduce((sum, task) => sum + (task.bid || 0), 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-primary">Dashboard Overview</h2>

      {/* ✅ User Profile Section */}
      <div className="bg-white text-primary rounded-lg shadow p-4 mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Welcome, {user?.displayName || "User"} 👋
        </h3>
        <p>Email: {user?.email}</p>
        {user?.photoURL && (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-20 h-20 rounded-full mt-4"
          />
        )}
      </div>

      {/* ✅ Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-base-200 p-6 rounded-lg shadow text-center">
          <h4 className="text-2xl font-bold text-primary">{allTasks.length}</h4>
          <p className="text-gray-500">Total Tasks</p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow text-center">
          <h4 className="text-2xl font-bold text-primary">{myTasks.length}</h4>
          <p className="text-gray-500">My Posted Tasks</p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow text-center">
          <h4 className="text-2xl font-bold text-primary">{totalBids}</h4>
          <p className="text-gray-500">Total Bids</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
