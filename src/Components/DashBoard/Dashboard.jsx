import React from "react";
import { Link, NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 p-5 fixed top-0 bottom-0 left-0">
        <h2 className="text-xl font-bold mb-6 text-center">Dashboard</h2>
        <ul className="space-y-3">
          <li>
            <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/BrowseTask" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>
              Browse Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addTask" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myTasks" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>
              My Posted Tasks
            </NavLink>
          </li>
          <li>
            <Link to="/" className="text-blue-500">← Back to Home</Link>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
