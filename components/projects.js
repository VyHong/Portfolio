import React from "react";
import ProjectCarousel from "./projectCarousel";
import styles from "../styles/projects.module.css";
function projects(props) {
  return (
    <div id="Projects" className={styles.projectsContainer} data-aos="fade-up">
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Projects</h2>
      <ProjectCarousel />
    </div>
  );
}

export default projects;
