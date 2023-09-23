import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);