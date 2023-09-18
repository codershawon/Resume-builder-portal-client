import React, { forwardRef, useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { IoCallSharp } from "react-icons/io5";
import { TiLocationArrow } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
// import { TiLocationArrow } from "react-icons/tb";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

import styles from "./Resume.module.css";
import { useAllTemplates } from "../../../Hooks/useAllTemplates";
import { useParams } from "react-router-dom";

const Resume = forwardRef((props, ref) => {

  const { name } = useParams();

  const information = props.information;
  const sections = props.sections;
  const containerRef = useRef();

  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    skills: information[sections.skills],
    language: information[sections.language],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };




  const sectionDiv = {

    [sections.workExp]: info.workExp ? (
      <div
        key={"workExp"}
        draggable
        onDragOver={() => seTarget(info.workExp.id)}
        onDragEnd={() => setSource(info.workExp.id)}
        className={`${styles.section} ${info.workExp.sectionTitle ? "" : styles.hidden}`}
      >
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={styles.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <Paperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={styles.date}>
                  <MapPin /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ) : null,
    // [sections.workExp]: (
    //   <div
    //     key={"workExp"}
    //     draggable
    //     onDragOver={() => seTarget(info.workExp?.id)}
    //     onDragEnd={() => setSource(info.workExp?.id)}
    //     className={`${styles.section} ${info.workExp?.sectionTitle ? "" : styles.hidden
    //       }`}
    //   >
    //     <div className={styles.content}>
    //       {info.workExp?.details?.map((item) => (
    //         <div className={styles.item} key={item.title}>
    //           {item.title ? (
    //             <p className={styles.title}>{item.title}</p>
    //           ) : (
    //             <span />
    //           )}
    //           {item.companyName ? (
    //             <p className={styles.subTitle}>{item.companyName}</p>
    //           ) : (
    //             <span />
    //           )}
    //           {item.certificationLink ? (
    //             <a className={styles.link} href={item.certificationLink}>
    //               <Paperclip />
    //               {item.certificationLink}
    //             </a>
    //           ) : (
    //             <span />
    //           )}
    //           {item.startDate && item.endDate ? (
    //             <div className={styles.date}>
    //               <Calendar /> {getFormattedDate(item.startDate)}-
    //               {getFormattedDate(item.endDate)}
    //             </div>
    //           ) : (
    //             <div />
    //           )}
    //           {item.location ? (
    //             <p className={styles.date}>
    //               <MapPin /> Remote
    //             </p>
    //           ) : (
    //             <span />
    //           )}
    //           {item.points?.length > 0 ? (
    //             <ul className={styles.points}>
    //               {item.points?.map((elem, index) => (
    //                 <li className={styles.point} key={elem + index}>
    //                   {elem}
    //                 </li>
    //               ))}
    //             </ul>
    //           ) : (
    //             <span />
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${styles.section} ${info.project?.sectionTitle ? "" : styles.hidden
          }`}
      >
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div key={item.title} className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <Paperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <GitHub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`${styles.section} ${info.education?.sectionTitle ? "" : styles.hidden
          }`}
      >

        <div className={styles.content}>
          {info.education?.details?.map((item) => (
            <div key={item.title} className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`${styles.section} ${info.achievement?.sectionTitle ? "" : styles.hidden
          }`}
      >

        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.skills]: (
      <div
        key={"skills"}
        draggable
        onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`${styles.section} ${info.achievement?.sectionTitle ? "" : styles.hidden
          }`}
      >

        <div>
          {info.skills?.details?.map((item) => (
            <div key={item.title} className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.name ? (
                <p className={styles.overview}>{item.name} </p>
              ) : (
                <span />
              )}
              {item.experience ? (
                <p className={styles.overview}>{item.experience} </p>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.language]: (
      <div
        key={"language"}
        draggable
        onDragOver={() => seTarget(info.language?.id)}
        onDragEnd={() => setSource(info.language?.id)}
        className={`${styles.section} ${info.language?.sectionTitle ? "" : styles.hidden
          }`}
      >

        <div>
          {info.language?.details?.map((item) => (
            <div key={item.title} className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.language ? (
                <p className={styles.overview}>{item.language} </p>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        draggable
        onDragOver={() => seTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
        className={`${styles.section} ${info.summary?.sectionTitle ? "" : styles.hidden
          }`}
      >

        <div className={styles.content}>
          <p className={styles.overview}>{info.summary?.detail}</p>
        </div>
      </div>
    ),

    [sections.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => seTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`${styles.section} ${info.other?.sectionTitle ? "" : styles.hidden
          }`}
      >
        <div></div>
        <div className={styles.content}>
          <p className={styles.overview}>{info?.other?.detail}</p>
        </div>
      </div>
    ),
  };

  const { [sections.summary]: summarySection, [sections.achievement]: achievementSection, [sections.other]: otherSection, [sections.education]: educationSection, [sections.project]: projectSection, [sections.workExp]: workExpSection, [sections.skills]: skillSection, [sections.language]:languageSection } = sectionDiv;

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievement, sections.other],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);



  const templates = useAllTemplates(info, sectionDiv, styles, columns, summarySection, achievementSection, workExpSection, projectSection, educationSection, otherSection, containerRef, FaUserCircle);
  console.log("name", name);

  const selectedTemplate = templates.find((template) => template.key === name);
  console.log(selectedTemplate);


  console.log("photo", skillSection);

  return (
    <div ref={ref}>
      {/* {templates}
     {templates} */}
      {selectedTemplate}
{/* 
      <div key="template13" className=''>
          <div ref={containerRef} className={styles.container}>
            <div className="flex gap-5">
  
              <div
                className=" p-4 text-start bg-gray-700 text-white h-full w-[40%] "
              >
                <div className="flex justify-center mt-4 mb-7">
                  <div className=" rounded-full border-4 border-white mx-auto  h-48 w-48 bg-cover bg-center" style={{
                    backgroundImage: `url(${info.basicInfo?.detail?.photo || 'https://i.ibb.co/KGnMKN0/user.png'})`,
                  }}>
                  </div>
                </div>
                <p className="mb-2 text-start text-yellow-50 font-base text-[26px] uppercase ">{info.basicInfo?.detail?.name}</p>
                <p className="text-[14px] text-yellow-50 font-thin mb-4 uppercase">{info.basicInfo?.detail?.title}</p>
  
                <p className="border-t-[2px] mt-9 mb-5 border-yellow-50"></p>
                <p className=" text-[16px] uppercase text-yellow-50 font-medium mt-4 mb-3">About me</p>
                <p className="h-full w-full mb-4    text-justify">{summarySection}</p>
  
  
  
  
                <p className=" text-[27px] uppercase font-medium mt-4 mb-3">Skills</p>
                {achievementSection}
  
                <p className="text-[27px] uppercase font-medium mt-4 mb-3">contact</p>
                {info.basicInfo?.detail?.phone ? (
                  <a className="flex text-[14px] mb-2 gap-1">
                    <span className="">Phone  </span><span>:</span>
                    {info.basicInfo?.detail?.phone}
                  </a>
                ) : (
                  <span />
                )}
                {info.basicInfo?.detail?.email ? (
                  <a className="flex w-full h-full text-[14px] mb-2 gap-1" type="email">
                    <span className="">Email </span><span>:</span>
                    {info.basicInfo?.detail?.email}
                  </a>
                ) : (
                  <span />
                )}
  
              </div>
  
  
  
  
              <div className="h-full w-[60%] ps-4 mt-4 text-black ">
                <p className="uppercase bg-yellow-100 w-full ps-2 pt-1 pb-1 font-medium my-2 text-gray-700 text-[17px] ">Work EXPERIENCE</p>
                <p className="">{workExpSection}</p>
  
  
                <p className="uppercase bg-yellow-100 w-full ps-2 pt-1 pb-1 font-medium my-2 text-gray-700 text-[17px] ">Education</p>
                <p>{educationSection}</p>
                <p className="uppercase bg-yellow-100 w-full ps-2 pt-1 pb-1 font-medium my-2 text-gray-700 text-[17px] ">Language</p>
  
  
  
              </div>
  
  
            </div>
          </div>
        </div> */}
    </div>
  );
});

Resume.displayName = 'Resume';

export default Resume;