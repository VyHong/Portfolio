import React from "react";
import WorkCard from "../components/workCard";
import cv from "../pages/cv.json";
import styles from "../styles/work.module.css";

function work(props) {
  return (
    <div id="work" className={styles.workingContainer}>
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        Working Experience
      </h2>
      {cv.work.map((item) => (
        <WorkCard key={item.headline} {...item} />
      ))}
    </div>
  );
}

export default work;
