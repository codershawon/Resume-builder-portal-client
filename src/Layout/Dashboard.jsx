import React, { useState } from "react";
import {
  HiMenuAlt3,
  HiUser,
  HiTemplate,
  HiX,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import {
  RiLogoutCircleRLine,
  RiHome4Line,
  RiBookLine,
  RiUserFill,
  RiContactsBook2Line,
} from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import "../components/Dashboard.css";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const admin = [
    { name: "Admin Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "All Users", link: "/", icon: HiOutlineUserGroup },
    { name: "Users resumes and letters", link: "/", icon: RiBookLine },
    { name: "Users Templates", link: "/", icon: HiTemplate },
    { name: "Templates", link: "/", icon: RiContactsBook2Line, margin: true },
    { name: "Home", link: "/", icon: RiHome4Line, margin: true },
    { name: "My Profile", link: "/", icon: HiUser },
  ];
  const users = [
    { name: "User Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "My resumes and letters", link: "/", icon: RiBookLine },
    { name: "My templates", link: "/", icon: HiTemplate },
    { name: "Templates", link: "/", icon: RiContactsBook2Line, margin: true },
    { name: "Home", link: "/", icon: RiHome4Line, margin: true },
    { name: "My Profile", link: "/", icon: HiUser },
  ];

  const user = false;

  return (
    // Container Sections
    <section className="flex gap-4">
      <div
        className={` min-h-screen bg-gradient-to-b from-[#197695] to-[#197685] ${
          open ? "w-80" : "w-16"
        } duration-500 text-gray-100 px-4`}>
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

        {/* User Profile */}
        <Link 
          title="User Profile"
          className={`${
            open ? "avatar onl flex mt-6" : "avatar online flex mt-6"
          }`}>
          <div
            className={`w-20 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  duration-500 ${
              !open &&
              "w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            }`}>
            <img src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/279312602_734737191043200_3706230763934917786_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0VlUf7SUo0L93l42p5c43LJlARVmc2HcsmUBFWZzYd-HNi0TY6X19i--yzckcDg1jPQ0zjVf5HNKCR9CkEZAq&_nc_ohc=MZABC4WllXYAX98sIn6&_nc_oc=AQlH8BstuKABO0IWstoTnFTOpiRR1W4XIgfR9BVLYlJnUmfXNpXN13cD0eusWpMmmXE&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCEPktpVGNaSgAizfo3FeB0TW3UPTuWED8yNmTnvMQI9A&oe=64E0044A" />
          </div>
        </Link>

        {/* User Information */}
        {open ? (
          <>
            <div
              className={`whitespace-pre duration-500 text-center my-5 ${
                !open && "opacity-0 translate-x-28 overflow-hidden "
              }`}>
              <h4
                className={`text-xl ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}>
                User Name
              </h4>
              <p
                className={`text-xs ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}>
                sssakibhasan997@gmail.com
              </p>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="my-8 flex flex-col gap-3 relative duration-500 active-class">
          {user ? (
            <>
              {/* Admin Dashboard */}

              {admin?.map((adminMenu, i) => (
                <NavLink
                  to={adminMenu?.link}
                  key={i}
                  className={` ${
                    adminMenu?.margin && "mt-5"
                  } group flex items-center text-sm  gap-3.5 font-medium p-2 duration-500 hover:bg-gray-800 rounded-md`}>
                  <div>
                    {React.createElement(adminMenu?.icon, { size: "20" })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}>
                    {adminMenu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
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
                  } group flex items-center text-sm  gap-3.5 font-medium p-2 duration-500  hover:bg-gray-800 rounded-md`}>
                  <div>
                    {React.createElement(userMenu?.icon, { size: "20" })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}>
                    {userMenu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                    {userMenu?.name}
                  </h2>
                </NavLink>
              ))}
            </>
          )}
        </div>

        {/* Logout sections */}
        <div
          title="LogOut"
          className={`mt-32 flex gap-4 cursor-pointer p-2 bg-gray-800 hover:bg-gray-50 hover:text-black rounded-md duration-500 ${
            !open && "p-2 "
          } `}>
          <div className={` duration-500 ${!open && "duration-500"}`}>
            <RiLogoutCircleRLine className="text-2xl" />
          </div>
          <div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}>
              LogOut
            </h2>
          </div>
        </div>
      </div>

      {/* Components Start */}
      <div className="m-3  text-gray-900  ">
        This is Your Dashboard
        <p>Lorem ipsum dolor t numquam recusandae non minus aspernatur</p>
      </div>
      {/* Components End */}
    </section>
  );
};

export default Dashboard;
