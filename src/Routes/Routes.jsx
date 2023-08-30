import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import AllResume from "../pages/AllResume/AllResume";
import AllUsers from "../pages/Dashboard/AllUsers";
import Faqs from "../components/FAQ/Faqs";
import Profile from "../pages/Dashboard/Profile";
import Contact from "../pages/ContactUs/Contact";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Main from "../Layout/Main";
import MyTemplates from "../components/Payments/MyTemplates";
import Payment from "../components/Payments/Payment";
import PrivateRoutes from "./PrivateRoutes";
import ResumeBuilder from "../components/ResumeBuilderSection/ResumeBuilder/ResumeBuilder";
import ResumeTemplate from "../pages/ResumeTemplate/ResumeTemplate";
import AboutUs from "../components/AboutUs/AboutUs";
import Privacypolicy from "../components/Privacypolicy/Privacypolicy";
import Terms from "../components/Terms/Terms";




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
        path: "/resumeTemplate",
        element: (
          <PrivateRoutes>
            <ResumeTemplate />
          </PrivateRoutes>
        ),
      },
      {
        path: "resumeBuilder/:id",
        element: <ResumeBuilder />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/faqs",
        element:<Faqs />
      },
      {
        path:"/privacyPolicy",
        element:<Privacypolicy />
      },
      {
        path:"/terms",
        element:<Terms />
      },
      {
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
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
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
    ],
  },
]);
