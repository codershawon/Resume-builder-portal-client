import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import imgLogo from "../../assets/logo/resume-cv-cover-letter-transparent.png";

const Footer = () => {
  return (
    <div className="">

    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:flex justify-center items-center gap-4">
          <img className="w-[240px]" src={imgLogo} alt="Logo" />

    <div>
      <footer className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 p-10 bg-[#197685] bg-opacity-10 text-black">
        <div>
          <div className=" gap-4">
            <img className="w-[240px]" src={imgLogo} alt="" />
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
        <div className="md:ps-2 py-2 md:py-0 flex flex-col md:flex-row gap-4">
          <p className="py-2">
            There are many variations of <br /> passing of Lorem Ipsum
            available.
          </p>
          <span className="flex gap-2">
            <Link
              to=""
              className="shadow-lg font-normal bg-white bg-opacity-30 flex h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-[#197685] hover:text-white"
            >
              <FaFacebook />
            </Link>
            <Link
              to=""
              className="shadow-lg font-normal bg-white bg-opacity-30 flex h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-[#197685] hover:text-white"
            >
              <FaGithub />
            </Link>
            <Link
              to=""
              className="shadow-lg font-normal bg-white bg-opacity-30 flex h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-[#197685] hover:text-white"
            >
              <FaDribbble />
            </Link>
            <Link
              to=""
              className="shadow-lg font-normal bg-white bg-opacity-30 flex h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-[#197685] hover:text-white"
            >
              <FaTwitter />
            </Link>
          </span>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <div className="footer-title">
          <h4 className="text-lg font-semibold">Services</h4>
          <Link to="" className="block mt-2">Branding</Link>
          <Link to="" className="block mt-2">Design</Link>
          <Link to="" className="block mt-2">Marketing</Link>
          <Link to="" className="block mt-2">Advertisement</Link>
        </div>
        <div className="footer-title">
          <h4 className="text-lg font-semibold">Company</h4>
          <Link to="" className="block mt-2">About us</Link>
          <Link to="" className="block mt-2">Resume Templates</Link>
          <Link to="" className="block mt-2">Blog</Link>
          <Link to="" className="block mt-2">Contact Us</Link>
        </div>

        <div className="footer-title">
          <h4 className="text-lg font-semibold">Legal</h4>
          <Link to="" className="block mt-2">Terms of use</Link>
          <Link to="" className="block mt-2">Privacy policy</Link>
          <Link to="" className="block mt-2">Additionally</Link>
        </div>
      </div>
    </footer>

      </footer>
      <footer className="p-4 bg-[#197685] bg-opacity-20 ">
        <div className="text-center mx-8">
          <p>Copyright © 2023 - All right reserved by ResumeGenius</p>
          
        </div>
        
      </footer>

    </div>
  );
};

export default Footer;
