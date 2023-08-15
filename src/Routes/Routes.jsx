import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ResumeTemplate from "../pages/ResumeTemplate/ResumeTemplate";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path:"/resumeTemplate",
            element:<ResumeTemplate/>
            path:"/login",
            element:<Login />
        }
      ],
    },
  ]);