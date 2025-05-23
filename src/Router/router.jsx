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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,

    children: [
      { index: true,
        loader:()=>fetch('http://localhost:3000/featuredTask'),
         Component: Home },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
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
        path: "BrowseTask",
        loader: () => fetch("http://localhost:3000/allTasks"),

        element: (
          <PrivateRoute>
            <BrowseTask></BrowseTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/BrowseTask/taskDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/taskDetails/${params.id}`),
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myTasks",

        element: (
          <PrivateRoute>
            <MyPostedTasks></MyPostedTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateTask/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/taskDetails/${params.id}`),

        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
      },
  
    ],
  },
]);
