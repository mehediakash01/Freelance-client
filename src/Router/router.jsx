import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Components/AuthLayout/Login";
import Register from "../Components/AuthLayout/Register";

export const router = createBrowserRouter([

  {
    path: "/",
 element:<Root></Root>,
   
    children: [{ index: true, Component: Home },
        {
            path:'/login',
            Component: Login
        },
        {
            path:'register',
            Component:Register
        }
        
    ],
  },

]);
