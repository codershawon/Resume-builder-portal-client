import Banner from "../Banner/Banner";
import BestResume from "../BestResume/BestResume";
import { Helmet } from "react-helmet-async";
import React from "react";
import ResumeBuilder from "../../../components/ResumeCheck/ResumeBuilder";
import StepsSection from "../../../components/StepsSection";
import TestimonialSlider from "../Testimonial/TestimonialSlider";

const Home = () => {
  return (
    <div className="teal">
      <Helmet>
        <title> Resume-Genius | Home</title>
      </Helmet>
      {/* Banner section */}
      <Banner />
<<<<<<< HEAD
      <ResumeBuilder/>

=======
      <ResumeBuilder />
>>>>>>> ea7b99da9d951ddcebd99ab7733dbfa03b8c189d
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
