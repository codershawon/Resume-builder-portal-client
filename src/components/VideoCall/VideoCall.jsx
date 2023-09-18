import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../Hooks/SectionTitle";
import FixedWidth from "../FixedWidth";

const VideoCall = () => {
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
              <span>Help Center</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-20">
        <SectionTitle
         subHeading={"Help Center"}
          heading={" Advice and answers from the Resume Genius"}
        ></SectionTitle>
      </div>

     <FixedWidth >
     <div className="grid grid-cols-1 md:grid-cols-2  md:gap-8 lg:gap-12 mb-20 mt-12">
          <div>
          <Link to="/faqs" target="blank">
        <div className=" my-8 flex grow overflow-hidden border border-solid border-card-border bg-card-bg no-underline shadow-card transition ease-linear rounded shadow hover:border-primary-alpha-60 flex-col  hover:border-[#0dcaf0] ">
          <div className="flex grow flex-row  gap-4 p-5  sm:flex-col sm:p-6">
            <div>
              <div className="h-7 w-7 sm:h-10 sm:w-10">
                <img
                  src="https://intercom.help/novoresume/assets/svg/icon:chat-user/000000"
                  alt=""
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></img>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="-mt-1 mb-0.5 line-clamp-2 text-xl font-semibold leading-normal text-body-primary-color transition ease-linear hover:text-[#0dcaf0] collection-summary:text-primary sm:line-clamp-1">FAQs</h3>
                <p>Tutorials, FAQs and best practices with our Resume Genius</p>
              </div>
              <div className="flex gap-2 ">
                <div class="flex flex-row">
                  <div className="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row">
                    <img className="inline-flex  items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&:nth-child(n+2)]:hidden lg:[&:nth-child(n+2)]:inline-flex h-6 w-6 " src="https://i.ibb.co/0BvfWBc/OMYJ3xu-I-male-12-cartoon21.png" alt="" />
                    <img className="inline-flex  items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&:nth-child(n+2)]:hidden lg:[&:nth-child(n+2)]:inline-flex h-6 w-6 " src="https://i.ibb.co/pnTj1xZ/367521118-826859039065663-4484858077415561369-n.png" alt="" />
                  </div>
                </div>
                <div>
                  <span class="line-clamp-1 flex flex-wrap items-center text-base text-body-secondary-color">
                    <span class="hidden sm:inline">By Kabir and 1 other</span>
                    <span class="inline sm:hidden">2 authors</span>
                    <svg
                      width="4"
                      height="4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="m-2"
                    >
                      <path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
                    </svg>
                    12 articles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
          </div>
          <div>
          <Link to="/faquesction" target="blank">
        <div className=" my-8 flex grow overflow-hidden border border-solid border-card-border bg-card-bg no-underline shadow-card transition ease-linear rounded shadow  hover:border-primary-alpha-60 flex-col   hover:border-[#0dcaf0] ">
          <div className="flex grow flex-row  gap-4 p-5  sm:flex-col sm:p-6">
            <div>
              <div className="h-7 w-7 sm:h-10 sm:w-10">
                <img
                  src="	https://intercom.help/novoresume/assets/svg/icon:book-opened/000000"
                  alt=""
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></img>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="-mt-1 mb-0.5 line-clamp-2 text-xl font-semibold leading-normal text-body-primary-color transition ease-linear hover:text-[#0dcaf0] collection-summary:text-primary sm:line-clamp-1">Resume/CV Editor Help</h3>
                <p>Discover how you use the editor at its maximum capacity! </p>
              </div>
              <div className="flex gap-2 ">
                <div class="flex flex-row">
                  <div className="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row">
                    <img className="inline-flex  items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&:nth-child(n+2)]:hidden lg:[&:nth-child(n+2)]:inline-flex h-6 w-6" src="https://i.ibb.co/KzZW2Cf/Ariful-Hoque.png" alt="" />
                    
                  </div>
                </div>
                <div>
                  <span class="line-clamp-1 flex flex-wrap items-center text-base text-body-secondary-color">
                    <span class="hidden sm:inline">By Ariful</span>
                    <span class="inline sm:hidden">1 authors</span>
                    <svg
                      width="4"
                      height="4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="m-2"
                    >
                      <path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
                    </svg>
                    8 articles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
          </div>
          <div>
          <Link to="/coverLetter" target="blank">
        <div className=" my-8 flex grow overflow-hidden border border-solid border-card-border bg-card-bg no-underline shadow-card transition ease-linear rounded shadow hover:border-primary-alpha-60 flex-col  hover:border-[#0dcaf0] ">
          <div className="flex grow flex-row  gap-4 p-5  sm:flex-col sm:p-6">
            <div>
              <div className="h-7 w-7 sm:h-10 sm:w-10">
                <img
                  src="https://intercom.help/novoresume/assets/svg/icon:book-bookmark/000000"
                  alt=""
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></img>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="-mt-1 mb-0.5 line-clamp-2 text-xl font-semibold leading-normal text-body-primary-color transition ease-linear hover:text-[#0dcaf0] collection-summary:text-primary sm:line-clamp-1">Cover Letters Help</h3>
                <p>Learn about creating your cover letter with Resume Genius</p>
              </div>
              <div className="flex gap-2 ">
                <div class="flex flex-row">
                  <div className="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row">
                    <img className="inline-flex  items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&:nth-child(n+2)]:hidden lg:[&:nth-child(n+2)]:inline-flex h-6 w-6 z-30" src="https://i.ibb.co/Xydm8pm/1688405365772.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <span class="line-clamp-1 flex flex-wrap items-center text-base text-body-secondary-color">
                    <span class="hidden sm:inline">By Shawon</span>
                    <span class="inline sm:hidden">2 authors</span>
                    <svg
                      width="4"
                      height="4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="m-2"
                    >
                      <path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
                    </svg>
                    12 articles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
          </div>
          <div>
          <Link to="/contactUs" target="blank">
        <div className=" my-8 flex grow overflow-hidden border border-solid border-card-border bg-card-bg no-underline shadow-card transition ease-linear rounded  shadow hover:border-primary-alpha-60 flex-col  hover:border-[#0dcaf0] ">
          <div className="flex grow flex-row  gap-4 p-5  sm:flex-col sm:p-6">
            <div>
              <div className="h-7 w-7 sm:h-10 sm:w-10">
                <img
                  src="https://intercom.help/novoresume/assets/svg/icon:folder/000000"
                  alt=""
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></img>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="-mt-1 mb-0.5 line-clamp-2 text-xl font-semibold leading-normal text-body-primary-color transition ease-linear hover:text-[#0dcaf0] collection-summary:text-primary sm:line-clamp-1">More towards your success</h3>
                <p>More help support best practices with our Resume Genius</p>
              </div>
              <div className="flex gap-2 ">
                <div class="flex flex-row">
                  <div className="flex shrink-0 flex-col items-center justify-center rounded-full leading-normal sm:flex-row">
                    <img className="inline-flex  items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&:nth-child(n+2)]:hidden lg:[&:nth-child(n+2)]:inline-flex h-6 w-6" src="https://i.ibb.co/tK5rdxP/Screenshot-20230824-012934-Gallery.jpg" alt="" />
                    <img className="inline-flex  items-center justify-center rounded-full bg-primary text-lg font-bold leading-6 text-primary-text shadow-solid-2 shadow-body-bg [&:nth-child(n+2)]:hidden lg:[&:nth-child(n+2)]:inline-flex h-6 w-6" src="https://i.ibb.co/qnv13MK/sakib1-e03385d6.jpg" alt="" />
                    
                  </div>
                </div>
                <div>
                  <span class="line-clamp-1 flex flex-wrap items-center text-base text-body-secondary-color">
                    <span class="hidden sm:inline">By Meem and 1 other</span>
                    <span class="inline sm:hidden">2 authors</span>
                    <svg
                      width="4"
                      height="4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="m-2"
                    >
                      <path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
                    </svg>
                    12 articles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
          </div>
     </div>
     </FixedWidth>
    </div>
  );
};

export default VideoCall;
