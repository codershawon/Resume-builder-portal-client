
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";
import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
  return (
    <div className="mx-w-[1600px] mx-auto">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
