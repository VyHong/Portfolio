import Image from "next/image";

import monogram from "../assets/photos/Monogram.png";
import styles from "../styles/Home.module.css";

const Header = (props) => (
  <div className={styles.headerContainer}>
    <a
      className="navbar-brand fw-bold d-flex flex-row align-text-top"
      href="#"
      style={{ color: "#eeeae3" }}
    >
      <Image src={monogram} alt="" width="40" height="35" className="rounded" />
    </a>
    <ul className="nav  justify-content-end ">
      <li className="nav-item ">
        <a
          className="nav-link active link-dark fw-bolder"
          aria-current="page"
          href="#home"
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link link-dark fw-bolder" href="#work">
          Work
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link link-dark fw-bolder" href="#education">
          Education
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link link-dark fw-bolder" href="#skills">
          Skills
        </a>
      </li>
    </ul>
  </div>
);
export default Header;
