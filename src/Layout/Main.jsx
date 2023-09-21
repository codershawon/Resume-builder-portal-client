import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { BallTriangle, ColorRing } from "react-loader-spinner";
import { useEffect } from "react";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
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
            {noHeaderFooter || <Navbar/>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer />}
          </div>
        </>
      )}
    </>
  );
};

export default Main;
