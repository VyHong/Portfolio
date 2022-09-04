import Image from "next/image";

import monogram from "../assets/photos/Monogram.png";
import styles from "../styles/Home.module.css";

const Header = (props) => (
  <div className={styles.headerContainer}>
    <a className="navbar-brand" href="#">
      <Image
        src={monogram}
        alt=""
        width="30"
        height="24"
        className="rounded align-bottom"
      />
      Vy Hong
    </a>
    <ul className="nav  justify-content-end ">
      <li className="nav-item ">
        <a
          className="nav-link active link-dark"
          aria-current="page"
          href="#home"
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link link-dark" href="#work">
          Work
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link link-dark" href="#education">
          Education
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link link-dark" href="#skills">
          Skills
        </a>
      </li>
    </ul>
  </div>
);
export default Header;
