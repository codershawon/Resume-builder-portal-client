import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
 import "./testimonial.css";

import SectionTitle from "../../../Hooks/SectionTitle";

import { SwiperSlide ,Swiper} from "swiper/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";




// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
 import 'swiper/css/pagination';
import { useTranslation } from "react-i18next";
import FixedWidth from "../../../components/fixedwidth";




// // import required modules
// import { Pagination } from 'swiper/modules';
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [showFullTextArray, setShowFullTextArray] = useState([]);
  const { t } = useTranslation(["testimonialSlider"]);

  const toggleShowFullText = (index) => {
    const newArray = [...showFullTextArray];
    newArray[index] = !newArray[index];
    setShowFullTextArray(newArray);
  };

  useEffect(() => {
    // Fetch testimonials from the backend
    fetch("https://resume-builder-portal-server.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        const approvedTestimonials = data.filter((item) => item.status === "approved");
        setTestimonials(approvedTestimonials);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
      );
    }

    if (halfStar) {
      stars.push(
        <FontAwesomeIcon
          key={fullStars}
          icon={faStarHalfAlt}
          className="text-yellow-500"
        />
      );
    }

    return stars;
  };


  // Function to handle changing the displayed testimonial
  const changeTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-play functionality using useEffect
  useEffect(() => {
    const interval = setInterval(changeTestimonial, 4000); // Change testimonial every 4 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [testimonials.length]); // Include testimonials.length as a dependency to restart the interval when testimonials change
 

  return (
    // <FixedWidth>
      <section className="my-28 rgContainer">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className=" text-center">
            <SectionTitle
              subHeading={t("testimonialSlider:subHeading")}
              heading={t("testimonialSlider:heading")}
            ></SectionTitle>
            <div>
              <Swiper
                 slidesPerView={1}
                 spaceBetween={30}
                 pagination={{ el: ".swiper-pagination", clickable: true }}
                 modules={[Pagination]}
                
                 className="mySwiper swiperr"
                 breakpoints={{
                   768: {
                     slidesPerView: 2,
                   },
                 }}
               
              >
                {testimonials.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className={`swiper-client-msg shadow-md shadow-[#8bb7be] w-[100%] h-[${
                        showFullTextArray[idx] ? "auto" : "350px"
                      }]`}
                    >
                      <FaQuoteLeft className="quoteLeft"></FaQuoteLeft>
                     <br />
                      <p className="text-gray-600 md:text-lg font-medium text-base">
                        {showFullTextArray[idx]
                          ? item?.reviewText
                          : item?.reviewText.slice(0, 208)}
                        {item?.reviewText.length > 208 &&
                          !showFullTextArray[idx] && (
                            <span>
                              <button
                                className="text-semibold text-xl text-gray-700 ps-1"
                                onClick={() => toggleShowFullText(idx)}
                              >
                                ...See More
                              </button>
                            </span>
                          )}
                        {showFullTextArray[idx] && (
                          <span>
                            <button
                              className="text-semibold text-xl text-gray-700 ps-2"
                              onClick={() => toggleShowFullText(idx)}
                            >
                              See Less!
                            </button>
                          </span>
                        )}
                      </p>
                      <FaQuoteRight className="quoteRight mb-4"></FaQuoteRight>
                    </div>
                    <div className="swiper-client-data grid grid-cols-2 gap-0">
                      <figure className="client-image ">
                        <img className="" src={item.image} alt={item.name} />{" "}
                      </figure>
                      <div className="client-data-details">
                        <p className="text-xs md:text-lg font-semibold">
                          {item?.name}
                        </p>
                        <div className="mt-2 font-semibold">
                          {renderRatingStars(item.rating)}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
// </FixedWidth>
  );
};


export default TestimonialSlider;

