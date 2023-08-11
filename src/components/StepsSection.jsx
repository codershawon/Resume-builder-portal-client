import React, { useState } from "react";
import "./Steps.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FixedWidth from "./fixedwidth";
import SectionTitle from "../Hooks/SectionTitle";

const StepsSection = () => {
  return (
   
      <div className="rgContainer bg-[#fff]">
        {/* SubTile Section Start */}
        <SectionTitle
          subHeading={"HOW IT WORKS"}
          heading={
            " Build your job-winning resume in three simple steps"
          }></SectionTitle>
        {/* SubTile Section End */}

        {/* Step Card Sections Start */}
        <Tabs>
          <TabList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Tab>
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
                      <h2 className="font-bold text-2xl ">Step 01</h2>
                      <p className="text-base mt-2">
                        You are given a liberty to choose a template
                      </p>
                    </div>
                  </div>
                </a>
              </Tab>

              <Tab>
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
                      <h2 className="font-bold text-2xl ">Step 02</h2>
                      <p className="text-base mt-2">
                        Fill in your details using our simple form.
                      </p>
                    </div>
                  </div>
                </a>
              </Tab>

              <Tab>
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
                      <h2 className="font-bold text-2xl ">Step 03</h2>
                      <p className="text-base mt-2">
                        Download & start applying for jobs today!
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
                <div className="flex flex-col justify-center ">
                  <p className="text-[#ddd] font-bold text-6xl md:text-9xl mb-5 md:mb-9">
                    {" "}
                    01
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-5">
                    You are given a liberty to choose a template
                  </h3>
                  <p>
                    Choose from thousands of professionally designed templates!
                    No matter who you are, our Resume Builder will automatically
                    format them onto your favorite resume templates.
                  </p>
                </div>
                <div className="">
                  <img
                    className="w-full h-full"
                    src="https://i.ibb.co/ccHNWZW/step-1-11zon.jpg"
                    alt=""
                  />
                </div>
              </section>
            </TabPanel>

            {/* details section 2 */}

            <TabPanel>
              <section
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
                id="step2">
                <div className="">
                  <img
                    className="w-full h-full"
                    src="https://i.ibb.co/56wfHpX/step-2-11zon.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center ">
                  <p className="text-[#ddd] font-bold text-6xl md:text-9xl mb-5 md:mb-9">
                    {" "}
                    02
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-5">
                    Fill in your details using our simple form.
                  </h3>
                  <p>
                    We guide you through the process of writing each section,
                    step-by-step, down to the smallest part. Our resume builder
                    does all of the hard work. Remember, your work experiences
                    and education are unique. Our online Resume Builder features
                    will help you create a resume that reflects your greatest
                    strengths.
                  </p>
                </div>
              </section>
            </TabPanel>

            {/* details section 3 */}
            {/* just commit  */}

            <TabPanel>
              <section
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
                id="step3">
                <div className="flex flex-col justify-center ">
                  <p className="text-[#ddd] font-bold text-6xl md:text-9xl mb-5 md:mb-9">
                    {" "}
                    03
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-5">
                    Save and download your design on demand with one click
                  </h3>
                  <p>
                    Create, save, and download your resume to apply for any job
                    position in any organization. Our resume generator will make
                    sure the layout stays intact. You can download your resume
                    in PDF any time you desire. Make and download your resume
                    with no compromises.
                  </p>
                </div>
                <div className="">
                  <img
                    className="w-full h-full"
                    src="https://i.ibb.co/0FCbRFr/step-3-11zon.jpg"
                    alt=""
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
