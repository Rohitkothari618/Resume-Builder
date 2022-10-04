import React from "react";
import styles from "./Header.module.css";
import resumeSvg from "../../assets/undraw_resume_folder_re_e0bi.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> Builder
        </p>
        <p className={styles.heading}>
          Make your Own Resume. <span>It's Free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="svg" />
      </div>
    </div>
  );
};

export default Header;
