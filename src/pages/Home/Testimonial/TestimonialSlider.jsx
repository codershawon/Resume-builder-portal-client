import React, { useEffect, useState } from "react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FixedWidth from "../../../components/fixedwidth";

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonial static data
  const testimonials = [
    {
      photo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      rating: "4",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.",
    },
    {
      photo: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      rating: "5",
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.",
    },
    {
      photo: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "DevOp engineer",
      rating: "4.5",
      review:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati ",
    },
  ];

  // When get backend data, use the code and remove static testimonials array.

  // const [testimonials, setTestimonials] = useState([]);

  // useEffect(() => {
  //     // Fetch testimonials from the backend
  //     fetch("https://ph-ero-college-server-site.vercel.app/testimonials")
  //       .then((res) => res.json())
  //       .then((data) => setTestimonials(data))
  //       .catch((error) => console.error(error));
  //   }, []);

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
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-Black-400 text-5xl font-bold pb-6">
              What students are saying
            </h3>
            <ul>
              {testimonials.map((item, idx) =>
                currentTestimonial === idx ? (
                  <li key={idx}>
                    <figure>
                      <blockquote>
                        <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                          “{item.review}“
                        </p>
                      </blockquote>
                      <div className="mt-6">
                        <img
                          src={item.photo}
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
