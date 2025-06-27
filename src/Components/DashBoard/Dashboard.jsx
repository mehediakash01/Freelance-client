import React from "react";
import { Link, NavLink, Outlet } from "react-router"; 

const Dashboard = () => {
  const navLinkStyles = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition duration-200 ${
      isActive
        ? "bg-primary text-white font-semibold"
        : "text-gray-700 hover:bg-base-300 hover:text-primary"
    }`;

  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer Toggle (Hamburger) for small screens */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <div className="w-full p-4 shadow-sm flex items-center justify-between lg:hidden bg-base-100">
          <label htmlFor="dashboard-drawer" className="btn btn-primary btn-sm drawer-button">
            ☰ Menu
          </label>
          <h1 className="text-xl font-bold text-primary">Dashboard</h1>
        </div>
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Sidebar content */}
      <div className="drawer-side z-50">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="w-64 min-h-full bg-base-200 p-6">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">
            Dashboard
          </h2>

          <ul className="space-y-4">
            <li>
              <NavLink to="/dashboard" end className={navLinkStyles}>
                📊 Overview
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/BrowseTask" className={navLinkStyles}>
                🔍 Browse Tasks
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addTask" className={navLinkStyles}>
                ➕ Add Task
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myTasks" className={navLinkStyles}>
                📁 My Posted Tasks
              </NavLink>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 rounded-lg text-blue-600 hover:text-blue-800 hover:underline transition duration-200"
              >
                ← Back to Home
              </Link>
            </li>
            <li>
              {/* Theme toggle */}
              <label className="swap swap-rotate flex justify-center mt-6">
                <input type="checkbox" className="theme-controller" value="dark" />
                {/* sun icon */}
                <svg className="swap-off h-8 w-8 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="..." />
                </svg>
                {/* moon icon */}
                <svg className="swap-on h-8 w-8 fill-current text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="..." />
                </svg>
              </label>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
