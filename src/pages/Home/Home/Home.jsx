import Banner from '../Banner/Banner';
import React from 'react';
import Testimonial from '../Testimonial/Testimonial';

import StepsSection from '../../../components/StepsSection';

import TestimonialSlider from '../Testimonial/TestimonialSlider';

<<<<<<< Updated upstream
=======

const Home = () => {
  
>>>>>>> Stashed changes

const Home = () => {
    return (
        <div className='teal'>
            {/* Banner section */}

            {/* <Banner/> */}
            {/* <Testimonial/> */}
            <StepsSection/>

            <Banner/>
            <Testimonial/>
            
            {/* Testimonial slider start here */}
            <TestimonialSlider/>
        </div>
    );
};

export default Home;