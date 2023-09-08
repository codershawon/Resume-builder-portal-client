import React, { useState, useEffect } from "react";
import "./Banner.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Banner = () => {
  const { t } = useTranslation(["banner"]);
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
    <div className="h-screen max-w-[1400px] mx-auto">
     <div className="banner-section overflow-hidden grid md:grid-cols-1 lg:grid-cols-2 text-center md:text-left lg:items-start mt-10 lg:mt-0 ">
        <div className="banner-content ">
          <h1 className="text-sm uppercase font-semibold text-gray-500 mb-2 lg:pt-36">
            {t("banner:unlockPotential")}
          </h1>
          <h2 className="text-4xl w-full lg:w-full font-bold mb-2">
            {t("banner:bannerTitle")}
          </h2>
          <p className="w-full md:w-full lg:w-full hidden lg:block text-base font-medium mb-2">
            {t('banner:bannerDescription')}
          </p>
          <p className="text-gray-600 font-medium mb-2 hidden lg:block w-full lg:w-full">
          {t('banner:bannerDescription2')}
          </p>
          <Link to="/allResume"><button className="my-btn">{t('banner:bannerCTA')}</button></Link>
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
