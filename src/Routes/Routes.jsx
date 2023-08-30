import AboutUs from "../components/AboutUs/AboutUs";
import AdminRoute from "./AdminRoute";
import AllResume from "../pages/AllResume/AllResume";
import AllUsers from "../pages/Dashboard/AllUsers";
import Contact from "../pages/ContactUs/Contact";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Faqs from "../components/FAQ/Faqs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Main from "../Layout/Main";
import MyTemplates from "../components/Payments/MyTemplates";
import Payment from "../components/Payments/Payment";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/Dashboard/Profile";
import ResumeBuilder from "../components/ResumeBuilderSection/ResumeBuilder/ResumeBuilder";
// import ResumeTemplate from "../pages/ResumeTemplate/ResumeTemplate";
import { createBrowserRouter } from "react-router-dom";
import Feedback from "../pages/Feedback/Feedback";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UsersInfo from "../pages/Dashboard/UsersInfo";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allresume",
        element: <AllResume></AllResume>,
      },
      {
        path: "contactUs",
        element: <Contact />,
      },
      {
        path: "resumeBuilder/:id",
        element: <ResumeBuilder />,
      },
      // {
      //   path:"resume-form",
      //   element:<ResumeForm/>,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/faqs",
        element:<Faqs />
      },{
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path:"adminHome",
        element:<AdminHome/>
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "usersInfo",
        element: (
          <AdminRoute>
            <UsersInfo/>
          </AdminRoute>
        ),
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "my-template/:id",
        element: <MyTemplates />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "feedback",
        element: <Feedback/>,
      },
    ],
  },
]);
