import React from "react";
import SkillCard from "../components/skillCard";
import cv from "../pages/cv.json";
import styles from "../styles/skills.module.css";

function skills(props) {
  return (
    <div id="skills" data-aos="fade-up" className={styles.skillsContainer}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Skills</h2>
      <div className={styles.skillCategoryContainer}>
        <div
          className="card-colums"
          style={{
            width: "13rem",
            flex: 1,
          }}
        >
          <h4>Coding</h4>
          {cv.skills.coding.map((item) => (
            <SkillCard key={item.headline} {...item} />
          ))}
        </div>
        <div
          className="card-colums"
          style={{
            width: "13rem",
            flex: 1,
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <h4>EDV</h4>
          {cv.skills.EDV.map((item) => (
            <SkillCard key={item.headline} {...item} />
          ))}
        </div>
        <div
          className="card-colums"
          style={{
            width: "13rem",

            flex: 1,
          }}
        >
          <h4>Language</h4>
          {cv.skills.languages.map((item) => (
            <SkillCard key={item.headline} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default skills;
