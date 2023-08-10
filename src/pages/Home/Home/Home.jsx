import Banner from "../Banner/Banner";
import React from "react";
import StepsSection from "../../../components/StepsSection";
import TestimonialSlider from "../Testimonial/TestimonialSlider";
import BestResume from "../BestResume/BestResume";

const Home = () => {
  return (
    <div className="teal">
      {/* Banner section */}
      <Banner />
     

            {/* <Testimonial/> */}
            <StepsSection/>
             {/* Steps */}
             <BestResume/>
            {/* Testimonial slider start here */}
            <TestimonialSlider/>
            {/* kdkfdk */}
        </div>
    );
};

export default Home;
