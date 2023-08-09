import Banner from '../Banner/Banner';
import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import TestimonialSlider from '../Testimonial/TestimonialSlider';

const Home = () => {
    return (
        <div>
            {/* Banner section */}
            <Banner/>
            <Testimonial/>
            
            {/* Testimonial slider start here */}
            <TestimonialSlider/>
        </div>
    );
};

export default Home;