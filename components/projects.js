import React from "react";
import ProjectCarousel from "./projectCarousel";

function projects() {
  return (
    <div id="projects" className="section" data-aos="fade-up">
      <h2 className="font-bold text-2xl text-center mb-5">Projects</h2>
      <ProjectCarousel />
    </div>
  );
}

export default projects;
