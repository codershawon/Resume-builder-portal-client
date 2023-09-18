// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./AboutUs.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaUserCircle } from "react-icons/fa";
import SectionTitle from "../../Hooks/SectionTitle";

const AboutUs = () => {
  return (
    <>
      <div className="mt-10">
        <SectionTitle
          subHeading={"Resume Genius Team"}
          heading={
            "Meet Our Team"
          }></SectionTitle>
      </div>

      <div className="my-custom-swiper max-w-screen-xl mx-auto -mt-20 overflow-hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="card w-80 h-80 glass p-6 transition-transform transform hover:-translate-y-2">
              <div className="avatar">
                <div className="w-40 rounded-full ring ring-[#42C3E4] ring-offset-[#197685] ring-offset-2 mx-auto relative -top-20">
                  <img
                    src="https://i.ibb.co/Xydm8pm/1688405365772.jpg"
                    alt="Profile"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-center font-bold text-xl">Shawon Barua</h2>
                <p className="text-center text-gray-600">MERN Stack Developer</p>
                <div className="flex justify-center mt-4 gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100078624861319"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaUserCircle className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shawon-barua-87186023b"
                    className="social-icon rounded-full p-2 bg-[#197685] hover:bg-[#3ea0b8ca]transition-all duration-300"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://github.com/codershawon"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                  >
                    <FaGithub className="text-white text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card w-80 h-80 glass p-6 transition-transform transform hover:-translate-y-2">
              <div className="avatar">
                <div className="w-40 rounded-full ring ring-[#42C3E4] ring-offset-[#197685] ring-offset-2 mx-auto relative -top-20">
                  <img
                    src="https://i.ibb.co/tK5rdxP/Screenshot-20230824-012934-Gallery.jpg"
                    alt="Profile"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-center font-bold text-xl">Sabita Binte Hoque Meem</h2>
                <p className="text-center text-gray-600">MERN Stack Developer</p>
                <div className="flex justify-center mt-4 gap-3">
                  <a
                    href="https://64a2c2dd0e351314113f933b--ornate-pavlova-0670cc.netlify.app/"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaUserCircle className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sabita-binte-hoque-meem-85a0b6280/"
                    className="social-icon rounded-full p-2 bg-[#197685] hover:bg-[#3ea0b8ca]transition-all duration-300"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://github.com/sabitameem"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                  >
                    <FaGithub className="text-white text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80 h-80 glass p-6 transition-transform transform hover:-translate-y-2">
              <div className="avatar">
                <div className="w-40 rounded-full ring ring-[#42C3E4] ring-offset-[#197685] ring-offset-2 mx-auto relative -top-20">
                  <img
                    src="https://i.ibb.co/0BvfWBc/OMYJ3xu-I-male-12-cartoon21.png"
                    alt="Profile"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-center font-bold text-xl">Md Humayun Kabir Miazee</h2>
                <p className="text-center text-gray-600">MERN Stack Developer</p>
                <div className="flex justify-center mt-4 gap-3">
                  <a
                    href="https://mhkm-programmer.web.app/"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaUserCircle className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mhkm-programmer/"
                    className="social-icon rounded-full p-2 bg-[#197685] hover:bg-[#3ea0b8ca]transition-all duration-300"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://github.com/mhkm-programmer"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                  >
                    <FaGithub className="text-white text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80 h-80 glass p-6 transition-transform transform hover:-translate-y-2">
              <div className="avatar">
                <div className="w-40 rounded-full ring ring-[#42C3E4] ring-offset-[#197685] ring-offset-2 mx-auto relative -top-20">
                  <img
                    src="https://i.ibb.co/KzZW2Cf/Ariful-Hoque.png"
                    alt="Profile"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-center font-bold text-xl">Md Ariful Hoque</h2>
                <p className="text-center text-gray-600">MERN Stack Developer</p>
                <div className="flex justify-center mt-4 gap-3">
                  <a
                    href="https://hoques-portfolio.web.app/"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaUserCircle className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arif-ul-haque-34792a27b/"
                    className="social-icon rounded-full p-2 bg-[#197685] hover:bg-[#3ea0b8ca]transition-all duration-300"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://github.com/HaqueArif"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                  >
                    <FaGithub className="text-white text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80 h-80 glass p-6 transition-transform transform hover:-translate-y-2">
              <div className="avatar">
                <div className="w-40 rounded-full ring ring-[#42C3E4] ring-offset-[#197685] ring-offset-2 mx-auto relative -top-20">
                  <img
                    src="https://i.ibb.co/pnTj1xZ/367521118-826859039065663-4484858077415561369-n.png"
                    alt="Profile"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-center font-bold text-xl">Shuvojit Kumar Sana</h2>
                <p className="text-center text-gray-600">MERN Stack Developer</p>
                <div className="flex justify-center mt-4 gap-3">
                  <a
                    href="https://unique-peony-e9da47.netlify.app/"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaUserCircle className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shuvojit-kumar-sana-a995b1280/"
                    className="social-icon rounded-full p-2 bg-[#197685] hover:bg-[#3ea0b8ca]transition-all duration-300"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://github.com/shuvojitsana"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                  >
                    <FaGithub className="text-white text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80 h-80 glass p-6 transition-transform transform hover:-translate-y-2">
              <div className="avatar">
                <div className="w-40 rounded-full ring ring-[#42C3E4] ring-offset-[#197685] ring-offset-2 mx-auto relative -top-20">
                  <img
                    src="https://i.ibb.co/qnv13MK/sakib1-e03385d6.jpg"
                    alt="Profile"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-center font-bold text-xl">Sakib Hasan</h2>
                <p className="text-center text-gray-600">MERN Stack Developer</p>
                <div className="flex justify-center mt-4 gap-3">
                  <a
                    href="https://sakibhasan997.netlify.app/"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaUserCircle className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sakib-hasan-9a0286229/"
                    className="social-icon rounded-full p-2 bg-[#197685] hover:bg-[#3ea0b8ca]transition-all duration-300"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://github.com/sakibhasan997"
                    className="social-icon rounded-full p-2 bg-[#197685]  hover:bg-[#3ea0b8ca] transition-all duration-300"
                    target="_blank"
                  >
                    <FaGithub className="text-white text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="slider-controler -mt-48">
            <div className="swiper-button-prev slider-arrow">
              <AiOutlineArrowLeft className="text-[#197685]" />
            </div>
            <div className="swiper-button-next slider-arrow">
              <AiOutlineArrowRight className="text-[#197685]" />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
};
export default AboutUs;
