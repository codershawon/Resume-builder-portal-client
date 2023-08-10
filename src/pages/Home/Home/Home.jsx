import Banner from "../Banner/Banner";
import React from "react";
import ResumeBuilder from "../../../components/ResumeCheck/ResumeBuilder";
import StepsSection from "../../../components/StepsSection";
import TestimonialSlider from "../Testimonial/TestimonialSlider";

const Home = () => {
  return (
    <div className="teal">
      {/* Banner section */}
      <Banner />

      <ResumeBuilder />
      {/* <Testimonial/> */}
      <StepsSection />

      {/* Testimonial slider start here */}
      <TestimonialSlider />
    </div>
  );
};

export default Home;
