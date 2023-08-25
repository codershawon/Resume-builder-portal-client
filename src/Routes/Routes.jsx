import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AllResume from "../pages/AllResume/AllResume";
import Profile from "../pages/Dashboard/Profile";
import Contact from "../pages/ContactUs/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ResumeBuilder from "../components/ResumeBuilderSection/ResumeBuilder/ResumeBuilder";
import AboutUs from "../components/AboutUs/AboutUs";
import Feedback from "../pages/Feedback/Feedback";



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
        path: "resumeBuilder",
        element:<ResumeBuilder/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <AboutUs />,
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
        element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "feedback",
        element: <Feedback/>,
      },
    ]
  }
]);

