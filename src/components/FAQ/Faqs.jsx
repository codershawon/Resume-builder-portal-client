import { Link } from "react-router-dom";
import "./Faqs.css";
import Faquesction from "../Faquesction/Faquesction";


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
              <span>Resume and Cover Letter</span>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <div className=" mt-16 mb-20 text-center text-gray-700 ">
          <h2 className="text-2xl lg:text-3xl font-semibold border-b-2 w-80 lg:w-96 border-gray-800 pb-2 mx-auto">
            Frequently Asked Questions{" "}
          </h2>
          <p className="mx-5 mt-3"> Resume and Cover Letter</p>
        </div>
      </div>
      
      <Faquesction></Faquesction>
      <div className="my-6 ">
        <h2 className="text-center text-4xl font-bold my-6">As seen in:</h2>
        <div className=" px-6 md:px-20 lg:px-0">
          <ul className="grid px-4 md:px-0 md:justify-items-center grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 mx-auto">
            <li>
              <Link className="text-[24px] font-extrabold hover:text-[#197685]">
                life<span className="text-slate-400">hackre</span>
              </Link>
            </li>
            <li>
              <Link className="text-[24px] font-extrabold hover:text-[#197685]">
                theguardian
              </Link>
            </li>
            <li>
              <Link className="text-[24px] font-extrabold hover:text-[#197685]">
                buisness.com
              </Link>
            </li>
            <li>
              <Link className="text-[24px] font-extrabold uppercase hover:text-[#197685]">
                Financial TIME
              </Link>
            </li>
            <li>
              <Link className="text-[24px] font-extrabold uppercase hover:text-[#197685]">
                / Huffpost /
              </Link>
            </li>
            <li>
              <Link className="text-[24px] font-extrabold hover:text-[#197685]">
                Forbes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    

    </div>
  );
};

export default Faqs;
