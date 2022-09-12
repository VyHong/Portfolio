import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";

import profil from "../assets/photos/profil.jpeg";
import styles from "../styles/index.module.css";

import Education from "../components/education";
import Work from "../components/work";
import Skills from "../components/skills";
import Header from "../components/header";
import Projects from "../components/projects";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Vy Hong</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="home" className={styles.main}>
        <div className={styles.topContainer}>
          <Header />
          <div className={styles.topContent}>
            <span>
              <h1>Hello, I am Vy </h1>
              <h5 className="text-muted">
                Student in Information Systems
                <br /> at Technical University München
              </h5>
            </span>
            <span style={{ alignSelf: "center" }}>
              <Image
                src={profil}
                alt="Profil"
                width={200}
                height={200}
                className="rounded"
              />
            </span>
          </div>
        </div>
        <Work />
        <Education />
        <Skills />
        <Projects />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
