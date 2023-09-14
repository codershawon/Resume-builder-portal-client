import { Link } from "react-router-dom";
import "./Faqs.css";
import Faquesction from "../Faquesction/Faquesction";
import FixedWidth from "../FixedWidth";
import SectionTitle from "../../Hooks/SectionTitle";

const Faqs = () => {
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
              <span>Check Our FAQ</span>
              
            </li>
          </ul>
        </nav>
      </div>

      <div>
        {/* <div className=" mt-16 mb-20 text-center text-gray-700 ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold border-b-2 w-80 lg:w-96 border-gray-800 pb-2 mx-auto">
            Check Our FAQ
          </h2>
          <p className="mx-5 mt-3 md:text-xl"> Get answers to commonly asked questions</p>
        </div> */}
        <div>
        <SectionTitle

            subHeading={"Check our FAQ "}
            heading={" Get answers to commonly asked questions"}
          ></SectionTitle>
        </div>
      </div>

      {/* <div className="my-6 ">
        <h2 className="text-center text-4xl font-bold my-6">As seen in:</h2>
        <div className=" px-6 md:px-20 lg:px-0">
          <ul className="grid px-4 md:px-0 md:justify-items-center grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 mx-auto">
            <li>
              <Link to="/about" className="text-[24px] font-extrabold hover:text-[#197685]">
                life<span className="text-slate-400">hackre</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[24px] font-extrabold hover:text-[#197685]">
                theguardian
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[24px] font-extrabold hover:text-[#197685]">
                buisness.com
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[24px] font-extrabold uppercase hover:text-[#197685]">
                Financial TIME
              </Link>
            </li>
            <li>
              <Link  to="/about" className="text-[24px] font-extrabold uppercase hover:text-[#197685]">
                / Huffpost /
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[24px] font-extrabold hover:text-[#197685]">
                Forbes
              </Link>
            </li>
          </ul>
        </div>

        
      </div> */}

      <FixedWidth>
        <Faquesction></Faquesction>
      </FixedWidth>
    </div>
  );
};

export default Faqs;
