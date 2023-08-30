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
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/Blogs/BlogDetails";



// import ResumeTemplate from "../pages/ResumeTemplate/ResumeTemplate";
import Feedback from "../pages/Feedback/Feedback";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";


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
        path:"blogs",
        element: <Blogs/>
      },
      {
       path: "/blogDetails/:id",
       element: <PrivateRoutes><BlogDetails></BlogDetails></PrivateRoutes>,
       loader: ({params})=> fetch(`http://localhost:5000/blogs/${params.id}`)
      },
      {
        path: "/resumeTemplate",
        element: <PrivateRoutes><ResumeTemplate /></PrivateRoutes>,
},{
        path: "contactUs",
        element: <Contact />,
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
