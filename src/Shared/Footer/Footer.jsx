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
      className="bg-slate-50 text-white "
      style={{ backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)" }}
    >
      <div className="">
        <div className="pt-28  ps-10 md:ps-24  lg:ps-11 pb-32 w-full md:max-w-[1400px]  mx-auto">
          <div className="flex-wrap lg:grid  md:grid-col-4 lg:grid-cols-4 gap-6 justify-items-center text-black font-normal">
            <div className="">
              <div className="gap-4">
                <img
                  className="w-[240px] "
                  src="https://i.ibb.co/zhYJKFk/resume-cv-cover-letter-transparent.png"
                  alt=""
                />
              </div>
              <div>
                <div>
                  <p className="py-6 w-[80%] md:w-[100%] text-justify">
                    Resume Genius is a career site fueled by the best career
                    experts and a community of millions of readers yearly. We
                    share knowledge, tips, and tools to help everyone find their
                    dream job.
                  </p>
                  <span className="flex gap-2">
                    <Link
                      to=""
                      className="  shadow-lg font-normal  bg-[#197685] bg-opacity-50  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                    >
                      <FaFacebook></FaFacebook>
                    </Link>
                    <Link
                      to=""
                      className="  shadow-lg font-normal  bg-[#197685] bg-opacity-50  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                    >
                      <FaGithub></FaGithub>
                    </Link>
                    <Link
                      to=""
                      className="  shadow-lg font-normal  bg-[#197685] bg-opacity-50  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                    >
                      <FaDribbble></FaDribbble>
                    </Link>
                    <Link
                      to=""
                      className="shadow-lg font-normal  bg-[#197685] bg-opacity-50  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                    >
                      <FaTwitter></FaTwitter>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="footerGrid mt-10 md:mt-5 lg:mt-0">
              <h2 className="text-2xl uppercase mb-6">Our Services</h2>
              <Link to="/about" className="hover:text-[#0dcaf0] mb-1">
                About us
              </Link>
              <Link className="hover:text-[#0dcaf0] mb-1 " to="">
                {" "}
                Resume Templates
              </Link>
              <Link className="hover:text-[#0dcaf0] mb-1 " to="/faqs">
                {" "}
                FAQs
              </Link>
              <Link className="hover:text-[#0dcaf0] mb-1 " to="/blogs">
                {" "}
                Blog
              </Link>
              <Link className="hover:text-[#0dcaf0] mb-1 " to="/contactUs">
                {" "}
                Contact Us
              </Link>
            </div>
            <div>
              <div className="footerGrid  mt-10 md:mt-5 lg:mt-0">
                <h2 className="text-2xl mb-6">SERVICES</h2>
                <Link className="hover:text-[#0dcaf0] mb-1 mt-2" to="/">
                  Design{" "}
                </Link>
                <Link className="hover:text-[#0dcaf0] mb-1 " to="/">
                  Marketing{" "}
                </Link>
                <Link className="hover:text-[#0dcaf0] mb-1 " to="/">
                  Branding
                </Link>
                <Link className="hover:text-[#0dcaf0] mb-1 " to="/watchVideo">
                 Watching Video
                </Link>
              </div>
            </div>

            <div className="mt-8 md:mt-5 lg:mt-0">
              <h3 className="text-2xl uppercase mb-6">Official Info</h3>
              <div className="flex items-center gap-2 mt-8 mb-2">
                <FaAddressCard></FaAddressCard>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaEnvelope></FaEnvelope>
                <p>info.webbattalion@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaPhone></FaPhone>
                <p>+123 34598768</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#197685] bg-opacity-20 justify-center items-center sm:flex sm:justify-between  text-black font-normal">
        <div className=" text-center md:ps-24 lg:ps-12">
          <p>Copyright &copy; 2023 - Resume Genius</p>
        </div>
        <div className="md:me-20">
          <div className="flex gap-4 justify-center">
            <Link className="hover:text-[#0dcaf0]" to="/terms">
              Terms{" "}
            </Link>
            <Link className="hover:text-[#0dcaf0]" to="/privacyPolicy">
              Privacy
            </Link>
            <Link className="hover:text-[#0dcaf0]" to="/contactUs">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
