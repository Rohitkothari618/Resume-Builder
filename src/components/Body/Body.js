import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import styles from "./Body.module.css";
import { BiDownload } from "react-icons/bi";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

const Body = () => {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Project",
    education: "Education",
    achivements: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTilte: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTilte: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTilte: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTilte: sections.education,
      details: [],
    },
    [sections.achivements]: {
      id: sections.achivements,
      sectionTilte: sections.achivements,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTilte: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTilte: sections.other,
      detail: "",
    },
  });

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <BiDownload />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          information={resumeInformation}
          sections={sections}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
};

export default Body;
