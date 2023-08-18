import React, { useState, useEffect } from "react";
import "./Banner.css";
import FixedWidth from "../../../components/fixedwidth";

const Banner = () => {
  const images = [
    "https://i.ibb.co/R7mFPB6/Pink-Simple-Profile-Resume.jpg",
    "https://i.ibb.co/jwgMDLx/Pink-Simple-Profile-Resume-1.jpg",
    "https://i.ibb.co/Cwkbmdq/Professional-CV-Resume.jpg",
    "https://i.ibb.co/QfHfzVc/Black-White-Minimalist-CV-Resume.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="rgContainer">
      <div className="banner-section overflow-hidden grid md:grid-cols-1 lg:grid-cols-2 text-center md:text-left lg:items-start mt-10 lg:mt-0 mb-20 ">
        <div className="banner-content mb-8 lg:mb-0 lg:mr-20">
          <h1 className="text-sm uppercase font-semibold text-gray-500 mb-2 lg:pt-36">
            Unlock Your Potential with Resume Genius
          </h1>
          <h2 className="text-4xl w-full lg:w-96 font-bold mb-2">
            Create an Impressive Resume in Minutes
          </h2>
          <p className="w-full md:w-full lg:max-w-md text-base font-medium mb-2">
            Welcome to Resume Genius, your ultimate destination for crafting
            professional and eye-catching resumes effortlessly. Our intuitive
            resume builder empowers you to stand out from the crowd and showcase
            your unique skills and experiences.
          </p>
          <p className="text-gray-600 font-medium mb-2 w-full lg:max-w-md">
            Join Resume Genius today and take your career to the next level.
            Your dream job is just a resume away.
          </p>
          <button className="my-btn">Get Started Now</button>
        </div>

        <div className="overflow-clip h-full">
          <div className="rotating-images-area relative w-full lg:w-[250px] h-[400px] -mt-14 lg:mt-4 mb-28">
            <div className="rotating-images">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Resume ${index + 1}`}
                  className={`absolute transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    right: `-${index * 100}%`,
                    transform: "translateX(40%)",
                    top: "30%",
                    width: "250px",
                    height: "370px",
                    objectFit: "cover",
                    border: "2px solid #ddd",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    margin: "0 8px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
