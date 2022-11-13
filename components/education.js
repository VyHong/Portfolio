import React from "react";
import cv from "../pages/cv.json";
import Card from "./educationCard.tsx";

function education() {
  return (
    <section id="education" className="section overflow-hidden">
      <h2 className="font-bold text-right text-2xl mb-5">Education</h2>

      <div className="space-y-5">
        {cv.education.map((item) => (
          <Card
            key={item.name}
            title={item.name}
            subtitle={item.degree}
            location={item.location}
            date={item.date}
            description={item.description}
            className="ml-0 lg:ml-96"
          />
        ))}
      </div>
    </section>
  );
}

export default education;
