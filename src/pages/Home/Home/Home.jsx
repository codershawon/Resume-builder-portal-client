import Banner from "../Banner/Banner";
import React from "react";
import StepsSection from "../../../components/StepsSection";
import TestimonialSlider from "../Testimonial/TestimonialSlider";
import BestResume from "../BestResume/BestResume";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="teal">
      <Helmet>
        <title> Resume-Genius | Home</title>
      </Helmet>
      {/* Banner section */}
      <Banner />

      {/* <Testimonial/> */}
      <StepsSection />

      {/* Best Resume */}
      <BestResume />

      {/* Testimonial slider start here */}
      <TestimonialSlider />
      {/* kdkfdk */}
    </div>
  );
};

export default Home;
