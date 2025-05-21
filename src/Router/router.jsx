import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home/Home";

import Login from "../Components/AuthLayout/Login";
import Register from "../Components/AuthLayout/Register";
import AddTask from "../Pages/AddTask";
import PrivateRoute from "./PrivateRoute";
import BrowseTask from "../Pages/BrowseTask";



export const router = createBrowserRouter([

  {
    path: "/",
 element:<Root></Root>,
   
    children: [{ index: true, Component: Home },
        {
            path:'login',
            Component: Login
        },
        {
            path:'register',
            Component:Register
        },
        {
            path:'addTask',
           
           element: <PrivateRoute>
            <AddTask></AddTask>
           </PrivateRoute>
        },
        {
            path:'BrowseTask',
           loader:()=>fetch('http://localhost:3000/allTasks'),
          
           element: <PrivateRoute>
            <BrowseTask></BrowseTask>
           </PrivateRoute>
        },
        
    ],
  },

]);
