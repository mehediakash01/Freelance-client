import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    Component: Root,
    children: [{ index: true, Component: Home }],
  },
]);
