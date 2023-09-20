import Banner from "../Banner/Banner";
import BestResume from "../BestResume/BestResume";
import { Helmet } from "react-helmet-async";
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
      <ResumeBuilder />
     
     
      {/* <Testimonial/> */}
      <StepsSection />
      {/* Best Resume */}
      <BestResume />
     
      {/* Testimonial slider start here */}
      <TestimonialSlider />
      {/* kdkfdk */}
      <MessengerCustomerChat
        pageId="113136445219095"
        appId="837323987759806"
      />
     
    
    </div>
  );
};

export default Home;
