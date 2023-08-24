import Banner from "../Banner/Banner";
import BestResume from "../BestResume/BestResume";
import { Helmet } from "react-helmet-async";
import React from "react";
import ResumeBuilder from "../../../components/ResumeCheck/ResumeBuilder";
import StepsSection from "../../../components/StepsSection";
import TestimonialSlider from "../Testimonial/TestimonialSlider";
import Contact from "../../ContactUs/Contact";

const Home = () => {
  return (
    <div className="teal">
      <Helmet>
        <title> Resume-Genius | Home</title>
      </Helmet>
      {/* Banner section */}
      <Banner />
      <ResumeBuilder />
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
