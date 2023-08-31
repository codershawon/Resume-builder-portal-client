import {
  FaAddressCard,
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#03112d]  text-white "
      style={{ backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)" }}
    >
      <div className="">
        <div className="pt-28 ps-10 md:ps-24 lg:ps-0 pb-32 md:max-w-6xl  mx-auto">
          <div className="flex-wrap lg:grid  md:grid-col-4 lg:grid-cols-4 gap-6 justify-items-center">
            <div className="">
              <div className="gap-4">
          <img className="w-[240px] " src="https://i.ibb.co/zhYJKFk/resume-cv-cover-letter-transparent.png" alt="" />
        </div>
              <div>
                <div>
          <p className="py-2">
            There are many variations of <br /> pass of Lorem Ipsum
            available.
          </p>
          <span className="flex gap-2">
                  <Link
                    to=""
                    className="  shadow-lg font-normal  bg-[#197685] bg-opacity-30  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                  >
                    <FaFacebook></FaFacebook>
                  </Link>
                  <Link
                    to=""
                    className="  shadow-lg font-normal  bg-[#197685] bg-opacity-30  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                  >
                    <FaGithub></FaGithub>
                  </Link>
                  <Link
                    to=""
                    className="  shadow-lg font-normal  bg-[#197685] bg-opacity-30  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                  >
                    <FaDribbble></FaDribbble>
                  </Link>
                  <Link
                    to=""
                    className="  shadow-lg font-normal  bg-[#197685] bg-opacity-30  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                  >
                    <FaTwitter></FaTwitter>
                  </Link>
                </span>
        </div>
               
              </div>
            </div>

            <div className="footerGrid  mt-10 md:mt-5 lg:mt-0">
              <h2 className="text-2xl">Our Services</h2>
              <Link to="/about" className="hover:text-[#0dcaf0]">About us</Link>
              <Link className="hover:text-[#0dcaf0]" to="">
                {" "}
                Resume Templates
              </Link>
              <Link className="hover:text-[#0dcaf0]" to="/faqs">
                {" "}
                FAQs
              </Link>
              <Link className="hover:text-[#0dcaf0]" to="">
                {" "}
                Blog
              </Link>
              <Link className="hover:text-[#0dcaf0]" to="/contactUs">
                {" "}
                Contact Us
              </Link>
              
            </div>
            <div >
             
              <div className="footerGrid  mt-10 md:mt-5 lg:mt-0">
              <h2 className="text-2xl">Legal</h2>
            <Link className="hover:text-[#0dcaf0] mt-2" to="/terms">Terms </Link>
            <Link className="hover:text-[#0dcaf0] mt-2" to="/privacyPolicy">Privacy </Link>
            <Link className="hover:text-[#0dcaf0] mt-2" to="/support">Support</Link>
          </div>
              
            </div>
            
            
            <div className="footerGrid mt-8 md:mt-5 lg:mt-0">
              <h3 className="text-2xl">Official Info</h3>
              <div className="flex items-center justify-center gap-2">
                <FaAddressCard></FaAddressCard>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaEnvelope></FaEnvelope>
                <p>info.webbattalion@gmail.com</p>
              </div>
              <div className="flex items-center justify-center gap-2 ">
                <FaPhone></FaPhone>
                <p>+123 34598768</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#197685] bg-opacity-20 justify-center items-center md:flex md:justify-between md:items-end">
        <div className="md:text-start ms-10 md:ms-20">
          <p>Copyright &copy; 2023 - Resume Genius</p>
        </div>
        <div className="md:me-20">
          <div className="flex gap-4 justify-center">
            <Link className="hover:text-[#0dcaf0]" to="/terms">Terms </Link>
            <Link className="hover:text-[#0dcaf0]" to="/privacyPolicy">Privacy </Link>
            <Link className="hover:text-[#0dcaf0]" to="/support">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;