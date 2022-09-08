import React from "react";
import Image from "next/image";
import styles from "../styles/projects.module.css";
import portfolio from "../assets/photos/portfolio.png";
import stockapp from "../assets/photos/stocks.png";
function projectCarousel(props) {
  return (
    <div
      id="projectCarousel"
      className="carousel carousel-dark slide d-flex justify-content-center"
      //data-bs-ride="carousel"
      data-bs-interval="10000"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner shadow rounded w-100 ">
        <div className="carousel-item active   ">
          <div className={styles.projectCard}>
            <Image
              src={stockapp}
              alt="Profil"
              width={300}
              className="rounded-start "
            />
            <div className={styles.cardText}>
              <h5 className="card-title">Stock App (W.I.P)</h5>
              <p className="card-text mt-3">
                Based on the React-Native framework I created an app to play
                around with the representation of stock data by connecting the
                application to the AlphaVantage API and using various charting
                libraries.
              </p>
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                href="https://github.com/VyHong/FirstApp"
                className="btn btn-primary"
              >
                Check out on Github
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className={styles.projectCard}>
            <Image
              src={portfolio}
              alt="portfolio"
              className="rounded-start"
              width={300}
            />
            <div className={styles.cardText}>
              <h5>Portfolio </h5>
              <p>
                Using the React framework with Next.js I created this portfolio
                in order to have a centralized website where I can refer to my
                different projects. Currently hosted by Vercel
              </p>
              <a
                href="https://github.com/VyHong/Portfolio"
                className="btn btn-primary"
                rel="noopener noreferrer"
              >
                Check out on Github
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-item ">
          <div className={styles.projectCard}>
            <div className={styles.cardText}>
              <h5 className="card-title text-center ">Coming soon</h5>
              <p className="card-text mt-3 text-center">
                I am always interested in trying out new technologies so there
                will be more to come
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev "
        type="button"
        data-bs-target="#projectCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#projectCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default projectCarousel;
