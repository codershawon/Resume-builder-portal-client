import {
    AtSign,
    Calendar,
    GitHub,
    Linkedin,
    MapPin,
    Paperclip,
    Phone,
} from "react-feather";
import React, { forwardRef, useEffect, useRef, useState } from "react";

import TemplateSelection from "../TemplateSelection";
import styles from "./CoverLetter.module.css";
import { useAllCoverLetterTemplates } from "../../../Hooks/useAllCoverLetterTemplates";

// import AllResume from "../../Page/AllResume";
  // import Resume1 from "./Resume1";
  
  const CoverLetter = forwardRef((props, ref) => {
  
    const information = props.information;
    const sections = props.sections;
    const containerRef = useRef();
  
    const [columns, setColumns] = useState([[], []]);
    const [source, setSource] = useState("");
    const [target, setTarget] = useState("");
    const [selectedTemplate, setSelectedTemplate] = useState(null); // Added state for selected template
    const [selectedTemplateId, setSelectedTemplateId] = useState(null); // Added state for selected template _id
  
    const templateImages = [
      "https://i.ibb.co/pnbYQHm/de9a0816b40a701f4d625bef109edc76.jpg",
   
    ]; // Define your template images here
  
    // const info = {
    //   workExp: information[sections.workExp]?.id || null,
    //   project: information[sections.project]?.id || null,
    //   achievement: information[sections.achievement]?.id || null,
    //   education: information[sections.education]?.id || null,
    //   basicInfo: information[sections.basicInfo]?.id || null,
    //   summary: information[sections.summary]?.id || null,
    //   other: information[sections.other]?.id || null,
    // };
    const info = {
      workExp: information[sections.workExp],
      project: information[sections.project],
      achievement: information[sections.achievement],
      education: information[sections.education],
      basicInfo: information[sections.basicInfo],
      summary: information[sections.summary],
      other: information[sections.other],
    };
  
    const getFormattedDate = (value) => {
      if (!value) return "";
      const date = new Date(value);
  
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };
  
    const sectionDiv = {
      [sections.workExpSection]: (
        <div
          key={"workExp"}
          draggable
          onDragOver={() => setTarget(info.workExp?.id)}
          onDragEnd={() => setSource(info.workExp?.id)}
          className={`${styles.section} ${
            info.workExp?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>{info.workExp?.sectionTitle}</div>
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
      ),
  
      [sections.project]: (
        <div
          key={"project"}
          draggable
          onDragOver={() => setTarget(info.project?.id)}
          onDragEnd={() => setSource(info.project?.id)}
          className={`${styles.section} ${
            info.project?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
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
          onDragOver={() => setTarget(info.education?.id)}
          onDragEnd={() => setSource(info.education?.id)}
          className={`${styles.section} ${
            info.education?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>
            {info.education?.sectionTitle}
          </div>
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
          onDragOver={() => setTarget(info.achievement?.id)}
          onDragEnd={() => setSource(info.achievement?.id)}
          className={`${styles.section} ${
            info.achievement?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>
            {info.achievement?.sectionTitle}
          </div>
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
  
      [sections.summary]: (
        <div
          key={"summary"}
          draggable
          onDragOver={() => setTarget(info.summary?.id)}
          onDragEnd={() => setSource(info.summary?.id)}
          className={`${styles.section} ${
            info.summary?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
          <div className={styles.content}>
            <p className={styles.overview}>{info.summary?.detail}</p>
          </div>
        </div>
      ),
  
      [sections.other]: (
        <div
          key={"other"}
          draggable
          onDragOver={() => setTarget(info.other?.id)}
          onDragEnd={() => setSource(info.other?.id)}
          className={`${styles.section} ${
            info.other?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
          <div className={styles.content}>
            <p className={styles.overview}>{info?.other?.detail}</p>
          </div>
        </div>
      ),
    };
  
    const {
      [sections.summary]: summarySection,
      [sections.achievement]: achievementSection,
      [sections.other]: otherSection,
      [sections.education]: educationSection,
      [sections.project]: projectSection,
      [sections.workExp]: workExpSection,
    } = sectionDiv;
  
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
  
    const templates = useAllCoverLetterTemplates(
      info,
      sectionDiv,
      styles,
      columns,
      summarySection,
      achievementSection,
      workExpSection,
      projectSection,
      educationSection,
      otherSection,
      containerRef
    );
    const templateId = props.templateId;
  
    return (
      <div ref={ref}>
        {!selectedTemplateId ? (
          <TemplateSelection
            templateImages={templateImages} // Pass templateImages as a prop
            onSelectTemplate={(templateId) => {
              setSelectedTemplateId(templateId);
            }}
          />
        ) : (
          useAllCoverLetterTemplates(
            info,
            sectionDiv,
            styles,
            columns,
            summarySection,
            achievementSection,
            workExpSection,
            projectSection,
            educationSection,
            otherSection,
            containerRef
          )
        )}
      </div>
    );
  });
  
  CoverLetter.displayName = "CoverLetter";
  
  export default CoverLetter;
  