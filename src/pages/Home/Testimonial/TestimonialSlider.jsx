import React, { useEffect, useState } from "react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import FixedWidth from "../../../components/fixedwidth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  console.log(testimonials)


  // When get backend data, use the code and remove static testimonials array.



  useEffect(() => {
      // Fetch testimonials from the backend
      // fetch("http://localhost:5000/review")
      fetch("https://resume-builder-portal-server.vercel.app/review")
        .then((res) => res.json())
        .then((data) => setTestimonials(data))
        .catch((error) => console.error(error));
    }, []);

  // Helper function to render the star rating
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
    <FixedWidth>
      <section className="my-28">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-Black-400 text-5xl font-bold pb-6">
              What students are saying
            </h3>
            <ul>
              {testimonials.map((item, idx) =>
                currentTestimonial === idx ? (
                  <li key={item.id}>
                    <figure>
                      <blockquote>
                        <p className="text-gray-600 text-base font-semibold sm:text-lg">
                          “{item.reviewText}“
                        </p>
                      </blockquote>
                      <div className="mt-6">
                        <img
                          src={item.image}
                          className="w-16 h-16 mx-auto rounded-full"
                          alt={item.name}
                        />
                        <div className="mt-3">
                          <span className="block text-gray-800 font-semibold">
                            {item.name}
                          </span>

                          <div className="mt-2 font-semibold">
                            {renderRatingStars(item.rating)}
                          </div>
                        </div>
                      </div>
                    </figure>
                  </li>
                ) : null
              )}
            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex gap-x-3 justify-center">
              {testimonials.map((item, idx) => (
                <li key={idx}>
                  <button
                    className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${
                      currentTestimonial === idx
                        ? "bg-indigo-600"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonial(idx)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </FixedWidth>
  );
};

export default TestimonialSlider;
