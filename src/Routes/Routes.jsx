import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ResumeTemplate from "../pages/ResumeTemplate/ResumeTemplate";
import Login from "../pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../components/Allusers/AllUsers";
import AllResume from "../pages/AllResume/AllResume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allresume",
        element: <AllResume/> ,
      },
      {
        path: "resumeTemplate",
        element: <ResumeTemplate />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "allUsers",
        element : <AllUsers></AllUsers>
      }
    ]
  }
]);

