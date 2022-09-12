import React from "react";
import Image from "next/image";
import portfolio from "../assets/photos/portfolio.png";
import stockapp from "../assets/photos/stocks.png";

const items = [
  {
    image: stockapp,
    title: "Stock App (W.I.P)",
    description:
      " Based on the React-Native framework I created an app to play around with the representation of stock data by connecting the application to the AlphaVantage API and using various charting libraries.",
    link: "#",
  },
  {
    image: portfolio,
    title: "Portfolio",
    description:
      "Using the React framework with Next.js I created this portfolio in order to have a centralized website where I can refer to my different projects. Currently hosted by Vercel",
    link: "#",
  },
  {
    title: "Coming soon",
    description:
      "I am always interested in trying out new technologies so there will be more to come",
  },
];

function projectCarousel() {
  return (
    <div className="carousel w-full">
      {items.map((item, index) => (
        <div
          key={item.title}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          <div className="mx-20 card card-side w-full bg-base-100 shadow-xl">
            <Image
              src={item.image}
              alt={item.title}
              className="rounded-start"
            />
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>

              <div className="card-actions justify-end">
                <button class="btn btn-primary">Check out on Github</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a
              href={`#slide${index == 0 ? items.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${((index + 1) % items.length) + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default projectCarousel;
