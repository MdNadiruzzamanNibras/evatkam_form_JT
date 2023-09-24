import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import SignUp from "../Login/SignUp";
import SignIn from "../Login/SignIn";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
]);