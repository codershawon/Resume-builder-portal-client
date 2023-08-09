import Banner from "../Banner/Banner";
import React from "react";

import StepsSection from "../../../components/StepsSection";

import TestimonialSlider from "../Testimonial/TestimonialSlider";

const Home = () => {
  return (
    <div className="teal">
      {/* Banner section */}
      <Banner />
      {/* <Banner/> */}
      {/* <Testimonial/> */}
      <StepsSection />


            {/* Banner section */}
            <Banner/>
            {/* <Banner/> */}
            {/* <Testimonial/> */}
            <StepsSection/>

           
            <Testimonial/>
            
            {/* Testimonial slider start here */}
            <TestimonialSlider/>
        </div>
    );
};

export default Home;
