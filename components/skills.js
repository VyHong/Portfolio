import React from "react";
import SkillCard from "./skillCard";
import cv from "../pages/cv.json";

function skills() {
  return (
    <div id="skills" data-aos="fade-up" className="section">
      <h2 className="font-bold text-2xl text-center mb-5">Skills</h2>

      <div className="flex flex-row justify-around space-x-5">
        <div className="flex-1">
          <h3 className="text-xl mb-5">Coding</h3>

          <div className="space-y-5">
            {cv.skills.coding.map((item) => (
              <SkillCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-xl mb-5">EDV</h3>

          <div className="space-y-5">
            {cv.skills.EDV.map((item) => (
              <SkillCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-xl mb-5">Language</h3>

          <div className="space-y-5">
            {cv.skills.languages.map((item) => (
              <SkillCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;
