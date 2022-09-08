import React from "react";
import EducationCard from "../components/educationCard";
import cv from "../pages/cv.json";
import styles from "../styles/education.module.css";

function education(props) {
  return (
    <div id="education" className={styles.educationContainer}>
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        Education
      </h2>
      {cv.education.map((item) => (
        <EducationCard key={item.headline} {...item} />
      ))}
    </div>
  );
}

export default education;
