import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import { BallTriangle, ColorRing } from "react-loader-spinner";
import { useEffect } from "react";

const Main = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const noHeaderFooter =
    location.pathname.includes("login") ;
  return (
    <>
      {loading ? (
        <>
          <div className="h-screen flex justify-center items-center">
            <BallTriangle
              height={150}
              width={150}
              radius={5}
              color="#197685"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </div>
        </>
      ) : (
        <>
          <div className="mx-w-[1600px] mx-auto">
            {/* {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />} */}
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Main;
