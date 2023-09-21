import {
  FaAddressCard,
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["footer"]);
  return (
    <footer
      className="bg-slate-50 text-white "
      style={{ backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)" }}>
      <div className="">
        <div className="rgContainer py-6">
          <div className="md:flex justify-between text-black font-normal">
            <div className="md:w-[30%]">
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
                  {t('footer:aboutUsDescription')}
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
              <h2 className="text-2xl uppercase mb-6">{t('footer:ourServices')}</h2>
              <Link to="/about" className="hover:text-[#0dcaf0] mb-1">
              {t('footer:aboutUs')}
              </Link>
              <Link className="hover:text-[#0dcaf0] mb-1 " to="/allresume">
                {" "}
                {t('footer:resumeTemplates')}
              </Link>
              <Link className="hover:text-[#0dcaf0] mb-1 " to="/faqs">
                {" "}
                {t('footer:faqs')}
              </Link>
              <Link className="hover:text-[#0dcaf0] mb-1 " to="/blogs">
                {" "}
                {t('footer:blog')}
              </Link>
              <Link className="hover:text-[#0dcaf0] mb-1 " to="/contactUs">
                {" "}
                {t('footer:contactUs')}
              </Link>
            </div>
            <div></div>

            <div className="mt-8 md:mt-5 lg:mt-0">
              <h3 className="text-2xl uppercase mb-6"> {t('footer:officialInfo')}</h3>
              <div className="flex items-center gap-2 mt-8 mb-2">
                <FaAddressCard></FaAddressCard>
                <p> {t('footer:address')}</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaEnvelope></FaEnvelope>
                <p>{t('footer:email')}</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaPhone></FaPhone>
                <p>{t('footer:phone')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#197685] bg-opacity-20">
        <div className="rgContainer p-4   flex flex-wrap items-center justify-between text-black font-normal">
          <div className="">
            <p>{t('footer:copyright')}</p>
          </div>
          <div className="">
            <div className="flex gap-4 justify-center items-center">
              <Link className="hover:text-[#0dcaf0]" to="/terms">
              {t('footer:terms')}
              </Link>
              <Link className="hover:text-[#0dcaf0]" to="/privacyPolicy">
              {t('footer:privacyPolicy')}
              </Link>
              <Link className="hover:text-[#0dcaf0]" to="/contactUs">
              {t('footer:support')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
