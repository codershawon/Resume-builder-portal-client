import "../components/Dashboard.css";

import { FaHistory, FaWallet } from "react-icons/fa";
import {
  HiMenuAlt3,
  HiOutlineUserGroup,
  HiTemplate,
  HiUser,
  HiX,
  HiBookOpen,
  HiBookmark,
  HiBookmarkAlt,
  HiOutlineBookOpen,
} from "react-icons/hi";
import {
  Link,
  NavLink,
  Navigate,
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useContext, useState } from "react";
import {
  RiBookLine,
  RiContactsBook2Line,
  RiHome4Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";

import { AuthContext } from "../Providers/AuthProvider";
import { MdOutlineDashboard } from "react-icons/md";
import UseSpinner from "../Hooks/UseSpinner";
import useAdmin from "../Hooks/useAdmin";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FcFeedback } from "react-icons/fc";

const Dashboard = () => {

  const [open, setOpen] = useState(true);
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  

  // logout
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  // const isAdmin = true;

  const admin = [
    {name: "Admin Dashboard",link: "/dashboard/adminHome",icon: MdOutlineDashboard,},
    {name: "All Users",link: "/dashboard/allUsers",icon: HiOutlineUserGroup,},
    { name: "Blog", link: "/dashboard/blog", icon: HiOutlineBookOpen },
    { name: "Users Templates", link: "/", icon: HiTemplate },
    { name: "Feedback", link: "/dashboard/feedback", icon: FcFeedback },
    { name: "Home", link: "/", icon: RiHome4Line, margin: true },
    { name: "My Profile", link: `/dashboard/profile`, icon: HiUser },
  ];
  const users = [
    { name: "User Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "My resumes and letters", link: "/", icon: RiBookLine },
    { name: "My templates", link: "/dashboard/my-template/:id", icon: HiTemplate },
    { name: "Feedback", link: "/dashboard/feedback", icon: FcFeedback },
    { name: "Payment", link: "/dashboard/payment", icon: FaWallet },
    { name: "Payment History", link: "/", icon: FaHistory },
    { name: "Templates", link: "/", icon: RiContactsBook2Line, margin: true },
    { name: "Home", link: "/", icon: RiHome4Line, margin: true },
     //{ name: "My Profile", link: `/dashboard/profile/${user?.email}`, icon: HiUser },
     { name: "My Profile", link: `/dashboard/profile`, icon: HiUser },
  ];

  // const user = true;

  const [isAdmin, isAdminLoading] = useAdmin();
 
  if (isAdminLoading) {
    return <UseSpinner></UseSpinner>;
  }


  return (
    // Container Sections
    <section className="flex gap-2 md:gap-6">
      <div
        className={` min-h-screen  bg-gradient-to-b from-[#197695] to-[#197685] ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          {open ? (
            <>
              <HiX
                title="Close SideBar"
                size={26}
                className="cursor-pointer "
                onClick={() => setOpen(!open)}
              />
            </>
          ) : (
            <>
              <HiMenuAlt3
                title="Open SideBar"
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </>
          )}
        </div>

        {/* User Pruofile */}
        
        
        <Link
          to={`/dashboard/profile`}
          title="User Profile"
          className={`${
            open ? "avatar onl flex mt-6" : "avatar online flex mt-6"
          }`}
        >
          <div
            className={`w-20 mx-auto rounded-full ring ring-white ring-offset-base-100 ring-offset-2  duration-500 ${
              !open &&
              "w-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-1"
            }`}
          >
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              title={user?.displayName}
            />
          </div>
        </Link>

      
        {/* User Information */}
        {open ? (
          <>
            <div
              className={`whitespace-pre duration-500 text-center my-5 ${
                !open && "opacity-0 translate-x-28 overflow-hidden "
              }`}
            >
              <h4
                className={`text-xl ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}
              >
                {user?.displayName}
              </h4>
              <p
                className={`text-xs ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}
              >
                {user?.email}
              </p>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="my-8 flex flex-col gap-3 relative duration-500 active-class">
          {isAdmin ? (
            <>
              {/* Admin Dashboard */}

              {admin?.map((adminMenu, i) => (
                <NavLink
                  to={adminMenu?.link}
                  key={i}
                  className={` ${
                    adminMenu?.margin && "mt-5"
                  } group flex items-center text-sm  gap-3.5 font-medium p-2 duration-500 hover:bg-gray-800 rounded-md`}
                >
                  <div>
                    {React.createElement(adminMenu?.icon, { size: "20" })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {adminMenu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {adminMenu?.name}
                  </h2>
                </NavLink>
              ))}
            </>
          ) : (
            /** Users Dashboard **/
            <>
              {users?.map((userMenu, i) => (
                <NavLink
                  to={userMenu?.link}
                  key={i}
                  className={` ${
                    userMenu?.margin && "mt-5"
                  } group flex items-center text-sm  gap-3.5 font-medium p-2 duration-500  hover:bg-gray-800 rounded-md`}
                >
                  <div>
                    {React.createElement(userMenu?.icon, { size: "20" })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {userMenu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {userMenu?.name}
                  </h2>
                </NavLink>
              ))}
            </>
          )}
        </div>

        {/* Logout sections */}

        <div
          onClick={handleLogout}
          title="LogOut"
          className={` flex gap-4 cursor-pointer p-2 bg-gray-800 hover:bg-gray-50 hover:text-black rounded-md duration-500 ${
            !open && "p-2 "
          } `}
        >
          <div className={` duration-500 ${!open && "duration-500"}`}>
            <RiLogoutCircleRLine className="text-2xl" />
          </div>
          <div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              LogOut
            </h2>
          </div>
        </div>
      </div>

      {/* Components Start */}
      <div className="m-3 w-full text-gray-900  ">
        <Outlet />
      </div>
      {/* Components End */}
    </section>
  );
};

export default Dashboard;