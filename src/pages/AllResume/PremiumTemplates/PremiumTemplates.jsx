import "./PremiumTemplates.css";
import LazyLoad from "react-lazyload";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../assets/premium-badge.png";

const PremiumTemplates = () => {
  const [resumeCollections, setResumeCollections] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:5000resume')
    fetch("https://resume-builder-portal-server.vercel.app/resume")
      .then((res) => res.json())
      .then((data) => {
        setResumeCollections(data);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log("resume", resumeCollections);

  const premiumResumes = resumeCollections.filter((resume) => resume.price > 0);

  console.log("premiumResumes", premiumResumes);
  return (
    <div className="my-20">
      <h2 className="font-bold text-3xl md:text-5xl">
        {" "}
        <span className="text-[#42C3E4]">Professional</span> Resume Templates
      </h2>
      <p className="text-xl">
        Professional templates mean business. Candidates applying for senior
        positions in construction, sales, information technology, and
        pharmaceutical industries will find a great selection of premium and
        free resume templates in this collection.
      </p>

      <div className="grid gird-cols sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 my-10">
        {premiumResumes.map((resume, index) => (
          <div key={index} className="p-5 resumeContents bg-slate-100">
            <div className="relative">
              <div className="absolute bottom-[95%] left-[50%] translate-x-[-50%]">
                <div className=" relative w-fit">
                  <img className="w-20" src={icon} alt="" />
                </div>
              </div>
              <LazyLoad height={480} offset={100}><img
                className="w-full  max-h-[480px]"
                src={resume.image}
                alt={`Premium Resume ${index + 1}`}
              /></LazyLoad>
              {/* <img
                className="w-full  max-h-[480px]"
                src={resume.image}
                alt={`Premium Resume ${index + 1}`}
              /> */}
              <Link
                className="my-btn absolute top-[75%] left-0 w-full md:hidden text-center"
                to={`/templates/${resume.name}`}
              >
                Use this template
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumTemplates;
