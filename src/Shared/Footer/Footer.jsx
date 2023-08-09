import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/resume-cv-cover-letter-transparent.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <div className="flex justify-center items-center gap-4">
            <img
              className="w-[75px]"
              src={imgLogo}
              alt=""
            />
          </div>
          <p>
            There are many variations of <br /> passg of Lorem Ipsum available,
            <br /> but thmajority have suffered altem.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="" className="">Branding</Link>
          <Link to=""className="">Design</Link>
          <Link to="" className="">Marketing</Link>
          <Link to="" className="">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="" className="">About us</Link>
          <Link to="" className="">Resume Templates</Link>
          <Link to="" className="">Contact Us</Link>
          <Link to="" className="">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="" className="">Terms of use</Link>
          <Link to="" className="">Privacy policy</Link>
          <Link to="" className="">Cookie policy</Link>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © <script>document.write(new Date().getFullYear())</script> - All right reserved by ResumeGenius</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
