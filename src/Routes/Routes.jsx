import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ResumeTemplate from "../pages/ResumeTemplate/ResumeTemplate";
import Login from "../pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AllResume from "../pages/AllResume/AllResume";
import Contact from "../pages/ContactUs/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ResumeBuilder from "../components/ResumeBuilderSection/ResumeBuilder/ResumeBuilder";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"allresume",
        element:<AllResume></AllResume>
      },
      {
        path:"contactUs",
        element: <Contact/>
      },
      {
        path: "/resumeTemplate",
        element: <PrivateRoutes><ResumeTemplate /></PrivateRoutes>,
      },
      {
        path: "resumeBuilder",
        element:<ResumeBuilder/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "allUsers",
        // TODO : have to warp around by the adminRoute 
        element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);

