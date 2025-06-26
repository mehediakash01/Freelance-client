import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";

import Login from "../Components/AuthLayout/Login";
import Register from "../Components/AuthLayout/Register";
import AddTask from "../Pages/AddTask";
import PrivateRoute from "./PrivateRoute";
import BrowseTask from "../Pages/BrowseTask";
import TaskDetails from "../Pages/TaskDetails";
import MyPostedTasks from "../Pages/MyPostedTask";
import UpdateTask from "../Pages/UpdateTask";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import { tasksLoader } from "../Utilities/tasksLoader";
import Dashboard from "../Components/DashBoard/Dashboard";
import DashboardOverview from "../Components/DashBoard/DashboardOverview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        loader: () =>
          fetch(
            "https://freelance-task-marketplace-server-ruddy.vercel.app/featuredTask"
          ),
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },

      {
        path: "BrowseTask",
        // loader: () => fetch("https://freelance-task-marketplace-server-ruddy.vercel.app/allTasks"),
        loader: tasksLoader,

        element: <BrowseTask></BrowseTask>,
      },
      {
        path: "/BrowseTask/taskDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://freelance-task-marketplace-server-ruddy.vercel.app/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "/updateTask/:id",
        loader: ({ params }) =>
          fetch(
            `https://freelance-task-marketplace-server-ruddy.vercel.app/${params.id}`
          ),

        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        Component: AboutUs,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardOverview /> }, // default page
      {
        path: "BrowseTask",
        // loader: () => fetch("https://freelance-task-marketplace-server-ruddy.vercel.app/allTasks"),
        loader: tasksLoader,

        element: <BrowseTask></BrowseTask>,
      },
      {
        path: "addTask",

        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "myTasks",

        element: (
          <PrivateRoute>
            <MyPostedTasks></MyPostedTasks>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
