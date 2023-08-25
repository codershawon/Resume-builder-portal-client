import React from "react";
import errorPage from "./errorPage.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="rgContainer pt-40 lg:pt-0">
      <Lottie className="w-full lg:h-[600px]" animationData={errorPage} />
      <div className="flex justify-center pb-[186px]  lg:pb-20">
        <Link to='/'><button className="my-btn">Go Back</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
