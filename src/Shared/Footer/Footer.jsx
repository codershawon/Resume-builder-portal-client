import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import imgLogo from "../../assets/logo/resume-cv-cover-letter-transparent.png";

const Footer = () => {
  return (
    <footer>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 p-10 bg-[#197685] bg-opacity-10 text-black">
      <div className="rgContainer">
        <div className=" gap-4">
          <img className="w-[240px]" src="https://i.ibb.co/zhYJKFk/resume-cv-cover-letter-transparent.png" alt="" />
        </div>
        <div>
          <p className="py-2">
            There are many variations of <br /> pass of Lorem Ipsum
            available.
          </p>
          <span className="flex gap-2">
            <Link
              to=""
              className="  shadow-lg font-normal  bg-white bg-opacity-30  flex h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-[#197685] hover:text-white">
              <FaFacebook></FaFacebook>
            </Link>
            <Link
              to=""
              className="  shadow-lg font-normal bg-white bg-opacity-30 flex h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-[#197685] hover:text-white"
            >
              <FaGithub></FaGithub>
            </Link>
            <Link
              to=""
              className="  shadow-lg font-normal  bg-white bg-opacity-30  flex h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-[#197685] hover:text-white"
            >
              <FaDribbble></FaDribbble>
            </Link>
            <Link
              to=""
              className="  shadow-lg font-normal  bg-white bg-opacity-30  flex h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-[#197685] hover:text-white"
            >
              <FaTwitter></FaTwitter>
            </Link>
          </span>
        </div>
      </div>
      <div className="footerGrid">
        <div className="footer-title">Services</div>
        <Link to=""> Branding </Link>
        <Link to=""> Design</Link>
        <Link to=""> Marketing</Link>
        <Link to="">  Advertisement</Link>
      </div>
      <div className="footerGrid">
        <div className="footer-title">Company</div>
        <Link to="" className="">About us</Link>
        <Link to="" className="">  Resume Templates </Link>
        <Link to="" className="">  Blog</Link>
        <Link to="" className="">  Contact Us</Link>
      </div>
      <div className="footerGrid">
        <div className="footer-title">Legal</div>
        <Link to=""> Terms of use</Link>
        <Link to=""> Privacy policy</Link>
        <Link to=""> Additionally</Link>
      </div>
    </div>
    <div className="p-4 bg-[#197685] bg-opacity-20 ">
      <div className="text-center mx-8">
        <p>Copyright © 2023 - All right reserved by ResumeGenius</p>
        
      </div>
      
    </div>

  </footer>

  );
};

export default Footer;
