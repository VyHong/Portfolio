import React from "react";
import cv from "../pages/cv.json";
import Card from "./card.tsx";

function Work() {
  return (
    <section id="work" className="section">
      <h2 className="font-bold text-2xl mb-5">Working Experience</h2>

      <div className="space-y-5">
        {cv.work.map((item) => (
          <Card
            key={item.headline}
            title={item.name}
            subtitle={item.position}
            location={item.location}
            date={item.date}
            description={item.activities}
            className="mr-20"
          />
        ))}
      </div>
    </section>
  );
}

export default Work;
