import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Utilities/Auth/AuthProvider";

const Header = () => {
  const { user, isLoading } = useContext(AuthContext);

  const links = (
    <ul className="space-x-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addTask">Add-Task</NavLink>
      <NavLink to="/BrowseTask">Browse-Tasks</NavLink>
      <NavLink to="/PostedTask">My-Posted-Tasks</NavLink>
    </ul>
  );

  isLoading && (
    <div>
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <p>{user?.email}</p>
        ) : (
          <div>
            <Link to={"/login"}>
              <button className="btn btn-accent">Login</button>
            </Link>
            <Link to={"/register"}>
              <button className="btn btn-accent">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
