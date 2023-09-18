import React from "react";
import errorPage from "./errorPage.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="rgContainer pt-40 lg:pt-0">
      <Lottie className="w-full lg:h-[600px]" animationData={errorPage} />
      <div className="flex justify-center pb-[186px]  lg:pb-20">
        <Link>
          <button className="my-btn" onClick={goBack}>
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
