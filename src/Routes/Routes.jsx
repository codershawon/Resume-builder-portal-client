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
import ResumeForm from "../components/ResumeCheck/ResumeForm";
import { createBrowserRouter } from "react-router-dom";
import Feedback from "../pages/Feedback/Feedback";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Terms from "../components/Terms/Terms";
import Privacypolicy from "../components/Privacypolicy/Privacypolicy";
import UsersInfo from "../pages/Dashboard/UsersInfo";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/Blogs/BlogDetails";
import BlogPage from "../pages/Dashboard/Blog/BlogPage";
import ChatSystem from "../pages/VideoCall/ChatSystem";
import CoverLetterFormBuilder from "../pages/CoverLetter/CoverLetterFormBuilder";
import CoverLetterChecker from "../pages/CoverLetter/CoverLetterChecker";
import Review from "../pages/Dashboard/Review";
import ResumeChecker from "../components/ResumeCheck/ResumeChecker";
import MyPayments from "../pages/Dashboard/MyPayments";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home />,
      },
      {
        path: "allresume",
        element: <PrivateRoutes><AllResume></AllResume></PrivateRoutes>,
      },
      {
        path: "/resumeChecker",
        element: <ResumeChecker/>,
      },
      {
        path: "contactUs",
        element: <Contact />,
      },
      {
        path: "templates/:name",
        element: <ResumeBuilder />,
      },
      {
        path: "/coverLetterBuilder/:id",
        element: <CoverLetterFormBuilder />,
      },
      {
        path: "/coverLetterChecker",
        element: <CoverLetterChecker />,
      },

      {
        path:"/resume-form",
        element:<ResumeForm/>,
      },{
        path:"/blogs",
        element:<PrivateRoutes><Blogs/></PrivateRoutes>
      },
      {
        path: "/blogDetails/:id",
        element: (
          <PrivateRoutes>
            <BlogDetails />
          </PrivateRoutes>),
        loader: ({ params }) =>
          fetch(`https://resume-builder-portal-server.vercel.app/blogs/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/faqs",
        element: <Faqs />
      }, {
        path: "/about",
        element: <PrivateRoutes><AboutUs /></PrivateRoutes>,
      },
      {
        path: "/terms",
        element: <Terms />
      },
      {
        path:"/privacyPolicy",
        element:<Privacypolicy />
      }

    ],
  },
  {
    path: "/chatSystem",
    element: <ChatSystem />
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
        path: "adminHome",
        element: <AdminHome />
      },
      {
        path: "blog",
        element: <BlogPage></BlogPage>,
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
            <UsersInfo />
          </AdminRoute>
        ),
      },
      {
        path: "review",
        element: (
          <AdminRoute>
            <Review />
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
        path: "myPayments",
        element: <MyPayments />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
    ],
  },
]);