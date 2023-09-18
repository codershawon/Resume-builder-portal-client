import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../Hooks/SectionTitle";
import FixedWidth from "../../FixedWidth";

const CorverLetter = () => {
  return (
    <div>
      <div className="breadcrumb-wrap">
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link className="text-[#efc778] hover:underline " to="/">
                Home
              </Link>
            </li>
            <li>
              <span>Cover Letter</span>
            </li>
          </ul>
        </nav>
      </div>

      <FixedWidth>
        <div className="mt-20">
          <SectionTitle
            subHeading={"Cover Letter"}
            heading={" Advice and answers from the Cover Letter"}
          ></SectionTitle>
        </div>

        <div>
          <div className="my-10 ms-4">
            <h2 className="text-4xl font-semibold mb-2">Cover Letter</h2>
            <p>Answers to commonly asked questions about Cover Letter Format</p>
          </div>
          <div tabIndex={0} className="collapse collapse-plus">
            <div className="collapse-title text-2xl font-medium ">
              What is a cover letter template?
            </div>
            <hr />
            <div className="collapse-content">
              <p>
                Cover letter templates help you write your own cover letter, by
                doing the following: Providing a professional look and layout
                for your cover letter. Providing an example of content you can
                use to create your letter. Serving as a “blueprint” for your
                cover letter.
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-plus">
            <div className="collapse-title text-2xl font-medium">
              How do I use a cover letter template?
            </div>
            <hr />
            <div className="collapse-content">
              <p>
                Just choose a cover letter template, or use our Cover Letter
                Builder, which will guide you through each section. Throughout
                the process, we’ll suggest phrases and provide tips that will
                help polish your letter. You can edit, save and download as many
                cover letters as you like.
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-plus">
            <div className="collapse-title text-2xl font-medium">
              What is a cover letter example?
            </div>
            <hr />
            <div className="collapse-content">
              <p>
                Our cover letter examples show you how to write cover letters
                for a variety of situations, from applying to a job to
                networking with a prospective employer. Use these examples to
                help format and create your own letter.
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-plus">
            <div className="collapse-title text-2xl font-medium">
              How do I use a cover letter example?
            </div>
            <hr />
            <div className="collapse-content">
              <p>
                To get the most out of our examples, follow these tips: Think
                about the type of job you want, your skills and your work
                experience. Think about how you want to present your best
                attributes in your letter. Pick one of our cover letter examples
                that best fits what you want to write. Use the content in our
                example as a foundation for writing your own cover letter.
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-plus ">
            <div className="collapse-title text-2xl font-medium">
              What is a cover letter format?
            </div>
            <hr />
            <div className="collapse-content">
              <p>
                The cover letter format is the layout of your letter, or how it
                will look to the reader — everything from colors and graphic
                elements to its fonts, line spacing and margins. Our examples
                and templates are perfectly formatted for any use.
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-plus">
            <div className="collapse-title text-2xl font-medium">
              How long does it take to write a cover letter in your builder?
            </div>
            <hr />
            <div className="collapse-content">
              <p>
                How long does it take to write a cover letter in your builder?
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-plus ">
            <div className="collapse-title text-2xl font-medium">
              Do I need a cover letter?
            </div>
            <hr />
            <div className="collapse-content">
              <p>
                Unless the job application specifically requests you not to send
                a cover letter, it’s good practice to send one. When written
                correctly, a good cover letter can be a strong companion to your
                resume, and be a critical factor in getting you a job interview.
                The best cover letters give you the chance to introduce yourself
                and your skills, explain why you’re a good fit for the job
                opportunity, and provide more depth and context on your
                achievements.
              </p>
            </div>
          </div>
        </div>

        <div
          className=" text-center py-6 my-8"
          style={{
            backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)",
          }}
        >
          <h1 className=" text-4xl flex justify-center items-center  font-bold text-gray-700 py-50">
            Contact Us
          </h1>
        </div>

        <div className="my-10 ms-4">
          <p className="text-xl">
            Didn’t find the answer you were looking for? Our customer care
            support team is ready to help you!
          </p>
          <br />

          <p className="text-xl">
            Visit our{" "}
            <Link
              className="text-[#197685] cursor-pointer hover:underline font-bold"
              to="/contactUs"
            >
              Contact Us
            </Link>{" "}
            page if you want to chat or send an email.
          </p>
        </div>
      </FixedWidth>
    </div>
  );
};

export default CorverLetter;
