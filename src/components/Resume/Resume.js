import React, { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./Resume.module.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlinePaperClip,
} from "react-icons/ai";
import {
  BiCalendarEvent,
  BiMapPin,
  BiPaperclip,
  BiPhone,
} from "react-icons/bi";

const Resume = forwardRef(({ information, sections, activeColor }, ref) => {
  const containerRef = useRef();
  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achivements],
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
    [sections.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => setTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${styles.section} ${
          info.workExp?.sectionTilte ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTilte}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}

              {item.comapanyName ? (
                <p className={styles.subTitle}>{item.comapanyName}</p>
              ) : (
                <span />
              )}

              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <BiPaperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}

              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <BiCalendarEvent /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}

              {item.location ? (
                <p className={styles.date}>
                  <BiMapPin /> {item.location}
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
          info.project?.sectionTilte ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTilte}</div>
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <BiPaperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <AiFillGithub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}

              {item.overview ? (
                <p className={styles.overview}>{item.overview}</p>
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
          info.education?.sectionTilte ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTilte}
        </div>
        <div className={styles.content}>
          {info.education?.details?.map((item) => (
            <div className={styles.item}>
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
                  <BiCalendarEvent /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achivements]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => setTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`${styles.section} ${
          info.achievement?.sectionTilte ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTilte}
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
          info.summary?.sectionTilte ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.summary?.sectionTilte}</div>
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
          info.other?.sectionTilte ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTilte}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info.other?.detail}</p>
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item == source);
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
      [sections.workExp, sections.achivements, sections.other],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!activeColor || !container) return;
    container.style.setProperty("--color", activeColor);
  }, [activeColor]);

  return (
    <div ref={ref}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.header}>
          <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
          <p className={styles.subHeading}>{info.basicInfo?.detail?.title}</p>
          <div className={styles.links}>
            {info.basicInfo?.detail?.email ? (
              <a className={styles.link}>
                <MdOutlineAlternateEmail />
                {info.basicInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.phone ? (
              <a className={styles.link}>
                <BiPhone />
                {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.linkedin ? (
              <a className={styles.link}>
                <AiFillLinkedin />
                {info.basicInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.github ? (
              <a className={styles.link}>
                <AiFillGithub />
                {info.basicInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.col1}>
            {columns[0].map((item) => sectionDiv[item])}
          </div>

          <div className={styles.col2}>
            {columns[1].map((item) => sectionDiv[item])}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;
