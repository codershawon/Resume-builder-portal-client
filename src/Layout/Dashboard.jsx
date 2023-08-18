import React, { useState } from "react";
import {
  HiMenuAlt3,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../components/Dashboard.css";

const Dashboard = () => {
  const user = true;

  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="my-btn drawer-button lg:hidden mr-auto ml-80 my-10">
            <HiMenuAlt3 />
          </label>
          <Outlet />
        </div>

        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gradient-to-b from-[#197695] to-[#197685] text-gray-50">
            {/* Sidebar content here */}

            {/* User Profile start*/}
            <Link title="User Profile">
              <div className="avatar flex mt-12">
                <div className="w-20 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/279312602_734737191043200_3706230763934917786_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0VlUf7SUo0L93l42p5c43LJlARVmc2HcsmUBFWZzYd-HNi0TY6X19i--yzckcDg1jPQ0zjVf5HNKCR9CkEZAq&_nc_ohc=MZABC4WllXYAX98sIn6&_nc_oc=AQlH8BstuKABO0IWstoTnFTOpiRR1W4XIgfR9BVLYlJnUmfXNpXN13cD0eusWpMmmXE&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCEPktpVGNaSgAizfo3FeB0TW3UPTuWED8yNmTnvMQI9A&oe=64E0044A" />
                </div>
              </div>
            </Link>

            <div className={`whitespace-pre duration-500 text-center my-5 `}>
              <h4 className={`text-2xl `}>User Name</h4>
              <p className={`text-sm `}>sssakibhasan997@gmail.com</p>
            </div>
            {/* User Profile end */}

            {/* Menu bar Start */}
            <li className="mt-5 duration-500 hover:bg-white  rounded-md">
              <NavLink className="hover:text-black" to="/">
                <MdOutlineDashboard />
                Admin Dashboard
              </NavLink>
            </li>
            <li className="my-4 duration-500 hover:bg-white  rounded-md">
              <NavLink to="/dashboard/allUsers" className="hover:text-black">
                <HiOutlineUserGroup />
                All Users
              </NavLink>
            </li>
            {/* Menu bar End */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;