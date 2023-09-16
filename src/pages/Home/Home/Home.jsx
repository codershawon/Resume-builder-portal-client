import Banner from "../Banner/Banner";
import BestResume from "../BestResume/BestResume";
import Contact from "../../ContactUs/Contact";
import CoverLetterChecker from "../../CoverLetter/CoverLetterChecker";
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
      {/* <ResumebuilderCheck/> */}
     
      {/* <Testimonial/> */}
      <StepsSection />
      {/* Best Resume */}
      <BestResume />
      <CoverLetterChecker/>
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
