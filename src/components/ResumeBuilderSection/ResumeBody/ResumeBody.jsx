import { useRef, useState } from "react";
import styles from "./ResumeBody.module.css";
import { ArrowDown } from "react-feather";
import ReactToPrint from "react-to-print";
import ResumeEditor from "../ResumeEditor/ResumeEditor";
import Resume from "../Resume/Resume";
import { Link } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";

const ResumeBody = ({ name }) => {

  const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#e67e22", "#e74c3c ", "#7f8fa6", "#40739e", "#c23616", "#b71540", "#60a3bc", "#38ada9",];
  const sections = {
    basicInfo: "Basic Info",
    summary: "Summary",
    education: "Education",
    workExp: "Work Experience",
    project: "Projects",
    skills: "Skill",
    language: "Language",
    achievement: "Achievements",
    other: "Other",
  };

  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      details: [],
    },
    [sections.language]: {
      id: sections.language,
      sectionTitle: sections.language,
      details: [],
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
  return (
    <div className={styles.container}>
      <div className="mt-10 mb-5">
        <h2 data-aos="fade-right" data-aos-duration="1000" className="font-bold text-3xl md:text-5xl md:text-center"> <span className="text-[#42C3E4]">Create</span> Your</h2>
        <h2 data-aos="fade-right" data-aos-duration="1000" className="font-bold text-3xl md:text-5xl text-start"> <span className="">Professional</span> Resume Templates</h2>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${activeColor === item ? styles.active : ""
                }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
     <Link to="/chatSystem">   <button>
                Chat <FaMessage/>
              </button></Link>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>

      <div className={styles.main}>
        <div className="flex-grow">
          <ResumeEditor
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />
        </div>
        <div>
          <Resume
            ref={resumeRef}
            name={name}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeBody;