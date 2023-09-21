import React, { useState } from "react";
import "./Steps.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import steps1 from "./seteps1.json";
import steps2 from "./steps2.json";
import steps3 from "./steps4.json";
import Lottie from "lottie-react";
import SectionTitle from "../Hooks/SectionTitle";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init();

const StepsSection = () => {
  const { t } = useTranslation(["steps"]);
  return (


    <div className="rgContainer bg-[#fff] mt-28">
      {/* SubTitle Section Start */}
      <div data-aos="fade-up" data-aos-duration="2000">
        <SectionTitle
          subHeading={t("steps:step1.subHeading")}
          heading=
          {t("steps:step1.heading")}
        ></SectionTitle>
      </div>
      {/* SubTitle Section End */}


      {/* Step Card Sections Start */}
      <Tabs>
        <TabList>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Tab data-aos="fade-left"
              data-aos-duration="2000">
              <a href="#step1">
                <div className="bg-[#F4F7FC] text-white py-10 px-8 shadow-lg rounded-md hover-design">
                  <div className="h-14 w-14 icon-hover bg-[rgba(247,138,203,.2)] flex justify-center items-center rounded-full mb-5">
                    <img
                      className=" h-8 w-8 icons"
                      src="https://i.ibb.co/tqMKdWP/resume.png"
                      alt=""
                    />
                  </div>
                  <div className="text-gray-700  text-colors">
                    <h2 className="font-bold text-2xl ">
                      {t("steps:step1.title")}
                    </h2>
                    <p className="text-base mt-2">
                      {t("steps:step1.description")}
                    </p>
                  </div>
                </div>
              </a>
            </Tab>

            <Tab data-aos="fade-down"
              data-aos-duration="2000">
              <a href="#step2">
                <div className="bg-[#F4F7FC] text-white py-10 px-8 shadow-lg rounded-md hover-design">
                  <div className="h-14 w-14 icon-hover bg-[rgba(0,174,255,.2)] flex justify-center items-center rounded-full mb-5">
                    <img
                      className=" h-8 w-8 icons"
                      src="https://i.ibb.co/HNDghbq/cv.png"
                      alt=""
                    />
                  </div>
                  <div className="text-gray-700  text-colors">
                    <h2 className="font-bold text-2xl ">
                      {t("steps:step2.title")}
                    </h2>
                    <p className="text-base mt-2">
                      {t("steps:step2.description")}
                    </p>
                  </div>
                </div>
              </a>
            </Tab>

            <Tab data-aos="fade-right"
              data-aos-duration="1000">
              <a href="#step3">
                <div className="bg-[#F4F7FC] text-white py-10 px-8 shadow-lg rounded-md hover-design">
                  <div className="h-14 w-14 icon-hover bg-[rgba(247,138,203,.2)] flex justify-center items-center rounded-full mb-5">
                    <img
                      className=" h-8 w-8 icons"
                      src="https://i.ibb.co/KWFPTs4/headhunting.png"
                      alt=""
                    />
                  </div>
                  <div className="text-gray-700  text-colors">
                    <h2 className="font-bold text-2xl ">
                      {t("steps:step3.title")}
                    </h2>
                    <p className="text-base mt-2">
                      {t("steps:step3.description")}
                    </p>
                  </div>
                </div>
              </a>
            </Tab>
          </div>
        </TabList>
        {/* Step Card Sections End */}

        {/* Details Steps section Start */}
        <div className="pt-8">
          {/* details section 1 */}
          <TabPanel>
            <section
              className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 justify-between gap-10 "
              id="step1">
              <div data-aos="zoom-out-right" data-aos-duration="2000" className="flex flex-col justify-center ">
                <p className="text-[#ddd] font-bold text-6xl md:text-9xl mb-5 md:mb-9">
                  {" "}
                  01
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold mb-5">
                  {t("steps:step1.description")}
                </h3>
                <p>{t("steps:step1.content")}</p>
              </div>
              <div data-aos="zoom-in-left" data-aos-duration="1000">
                <Lottie
                  className="w-full lg:h-[500px]"
                  animationData={steps1}
                />
              </div>
            </section>
          </TabPanel>

          {/* details section 2 */}

          <TabPanel>
            <section
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
              id="step2">
              <div data-aos="zoom-in-right" data-aos-duration="2000" className="">
                <Lottie
                  className="w-full lg:h-[600px]"
                  animationData={steps2}
                />
              </div>
              <div data-aos="zoom-in-left" data-aos-duration="2000" className="flex flex-col justify-center ">
                <p className="text-[#ddd] font-bold text-6xl md:text-9xl mb-5 md:mb-9">
                  {" "}
                  02
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold mb-5">
                  {t("steps:step2.description")}
                </h3>
                <p>{t("steps:step2.content")}</p>
              </div>
            </section>
          </TabPanel>

          {/* details section 3 */}
          {/* just commit  */}

          <TabPanel>
            <section
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
              id="step3">
              <div data-aos="zoom-in-right" data-aos-duration="2000" className="flex flex-col justify-center ">
                <p className="text-[#ddd] font-bold text-6xl md:text-9xl mb-5 md:mb-9">
                  {" "}
                  03
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold mb-5">
                  {t("steps:step3.description")}
                </h3>
                <p>{t("steps:step3.content")}</p>
              </div>
              <div data-aos="zoom-in-left" data-aos-duration="1000" className="">
                <Lottie
                  className="w-full lg:h-[500px]"
                  animationData={steps3}
                />
              </div>
            </section>
          </TabPanel>
        </div>
      </Tabs>
      {/* Details Steps section End */}
    </div>
  );
};

export default StepsSection;
