import { Link } from "react-router-dom";
import "./Faqs.css"
import Faquesction from "../Faquesction/Faquesction";

const Faqs = () => {
  return (
    <div>
      <div className="breadcrumb-wrap">
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link className="text-[#efc778] hover:underline " to="/">Home</Link>
            </li>
            <li>
              <span>
                Resume and Cover Letter Frequently Asked Questions
              </span>
            </li>
          </ul>
        </nav>
      </div>

      <div className="curve container-xs  text-center">
            <div className="container">
                  <div className="editor-content py-10 ">
                        <h2 className="text-5xl">Resume and Cover Letter Frequently Asked Questions</h2>
                        <p className="text-xl my-8">Find all the answers you need to know about how to use My Perfect Resume to easily create professional resumes and cover letters.</p>
                        
                        <Link >
                        <button className="my-btn ">Build my resume</button>
                        </Link>
                       
                  </div>
            </div>
            
      </div>
      <div className="my-6">
                  <h2 className="text-center text-3xl my-6">As seen in:</h2>
                  <div>
                        <ul  className="grid px-4 md:px-0 md:justify-items-center grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 mx-auto">
                              <li><Link className="text-[24px] font-extrabold hover:text-[#197685]">life<span className="text-slate-400">hackre</span></Link></li>
                              <li><Link className="text-[24px] font-extrabold hover:text-[#197685]">theguardian</Link></li>
                              <li><Link className="text-[24px] font-extrabold hover:text-[#197685]">buisness.com</Link></li>
                              <li><Link className="text-[24px] font-extrabold uppercase hover:text-[#197685]">Financial TIME</Link></li>
                              <li><Link className="text-[24px] font-extrabold uppercase hover:text-[#197685]">/ Huffpost /</Link></li>
                              <li><Link className="text-[24px] font-extrabold hover:text-[#197685]">Forbes</Link></li>
                        </ul>
                  </div>
            </div>

           <Faquesction></Faquesction>
      
    </div>
  );
};

export default Faqs;
