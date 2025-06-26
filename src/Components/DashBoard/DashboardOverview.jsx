import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Utilities/Auth/AuthProvider";

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://freelance-task-marketplace-server-ruddy.vercel.app/myTasks/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setMyTasks(data));
    }
  }, [user]);

  useEffect(() => {
    fetch("https://freelance-task-marketplace-server-ruddy.vercel.app/allTasks")
      .then((res) => res.json())
      .then((data) => setAllTasks(data));
  }, []);

  const totalBids = allTasks.reduce((sum, task) => sum + (task.bid || 0), 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-primary">
        Dashboard Overview
      </h2>

      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Welcome, {user?.displayName} 👋
        </h3>
        <p>Email: {user?.email}</p>
       
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-20 h-20 rounded-full mt-4"
          />
        
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
