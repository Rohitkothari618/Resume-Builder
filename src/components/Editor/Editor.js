import React, { useEffect, useState } from "react";
import styles from "./Editor.module.css";
import { ImCross } from "react-icons/im";
import InputControl from "../InputControl/InputControl";

const Editor = ({ sections, information, setInformation }) => {
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [sectionTilte, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) {
      tempValues.points = [];
    }
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter tilte eg. Frontend developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Company name"
          placeholder="Enter Company name eg. Amazon"
          value={values.comapanyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, comapanyName: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certification Link"
          placeholder="Enter Certification Link"
          value={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: event.target.value,
            }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg.Remote"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              location: event.target.value,
            }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          placeholder="Enter Start date of Work"
          value={values.startDate}
          type="date"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              startDate: event.target.value,
            }))
          }
        />
        <InputControl
          label="End Date"
          placeholder="Enter End date of Work"
          value={values.endDate}
          type="date"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              endDate: event.target.value,
            }))
          }
        />
      </div>

      <div className={styles.column}>
        <label>Enter workExp description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );
  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. chat app"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
        value={values.overview}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deplyed link of project"
          value={values.link}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg.B-tech"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="College/school Name"
        placeholder="Enter mame of your college/school"
        value={values.college}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter End date of this education"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg.Rohit"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          placeholder="Enter your title  eg.Frontend developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>

      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          value={values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="Github link"
          placeholder="Enter your github profile link"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          placeholder="Enter your email"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Enter phone"
          placeholder="Enter your Mobile number"
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const achivementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achivements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="summary"
        placeholder="Enter your objective/summary"
        value={values.summary}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );
  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        label="other"
        placeholder="Enter something"
        value={values.other}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
      />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.achivements:
        return achivementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      case sections.education:
        return educationBody;
      default:
        return null;
    }
  };
  const handleSubmission = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };

        setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTilte,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetail = {
          certificationLink: values.certificationLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          comapanyName: values.comapanyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...information[sections.workExp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;
        setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTilte,
          },
        }));
        break;
      }

      case sections.project: {
        const tempDetail = {
          link: values.link,
          title: values.title,
          overview: values.overview,
          github: values.github,
          points: values.points,
        };
        const tempDetails = [...information[sections.project]?.details];
        tempDetails[activeDetailIndex] = tempDetail;
        setInformation((prev) => ({
          ...prev,
          [sections.project]: {
            details: tempDetails,
            sectionTilte,
          },
        }));
        break;
      }

      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [...information[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;
        setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTilte,
          },
        }));

        break;
      }

      case sections.achivements: {
        const tempPoints = values.points;
        setInformation((prev) => ({
          ...prev,
          [sections.achivements]: {
            ...prev[sections.achivements],
            points: tempPoints,
            sectionTilte,
          },
        }));
        break;
      }

      case sections.summary: {
        const tempDetail = values.summary;

        setInformation((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetail,
            sectionTilte,
          },
        }));
        break;
      }

      case sections.other: {
        const tempDetail = values.other;
        setInformation((prev) => ({
          ...prev,
          [sections.other]: {
            ...prev[sections.other],
            detail: tempDetail,
            sectionTilte,
          },
        }));

        break;
      }
    }
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);

    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      comapanyName: activeInfo?.details
        ? activeInfo.details[0]?.comapanyName || ""
        : "",
      college: activeInfo?.details ? activeInfo.details[0]?.college || "" : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",

      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",

      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",

      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",

      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });
  }, [activeSectionKey]);

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
  }, [information]);

  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
  };

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";

    if (!details) return;

    details.splice(index, 1);
    setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));

    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };

  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;
    const activeInfo = information[sections[activeSectionKey]];
    setValues({
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      link: activeInfo.details[activeDetailIndex]?.link || "",
      certificationLink:
        activeInfo.details[activeDetailIndex]?.certificationLink || "",
      comapanyName: activeInfo.details[activeDetailIndex]?.comapanyName || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
      github: activeInfo.details[activeDetailIndex]?.github || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
    });
  }, [activeDetailIndex]);

  return (
    <div className={styles.container}>
      <div className={`${styles.header} `}>
        {Object.keys(sections).map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl
          label="Title"
          placeholder="Enter Section Title"
          value={sectionTilte}
          onChange={(event) => setSectionTitle(event.target.value)}
          className={styles.sectionTilte}
        />
        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div
                  className={`${styles.chip} ${
                    activeDetailIndex === index ? styles.active : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}
                >
                  <p>
                    {sections[activeSectionKey]}
                    {index + 1}
                  </p>
                  <ImCross
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteDetail(index);
                    }}
                  />
                </div>
              ))
            : ""}
          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className={styles.new} onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>
        {generateBody()}

        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
};

export default Editor;
