import Image from "next/image";

import monogram from "../assets/photos/Monogram.png";

const menuItems = [
  { name: "Work", link: "#work" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
];

// see `tailwind.config.js`
const themes = ["default", "light", "dark", "valentine"];

const Header = () => (
  <header className="navbar bg-base-300">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">
        <Image
          src={monogram}
          alt=""
          width="40"
          height="35"
          className="rounded"
        />
      </a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}

        <li tabIndex={0}>
          <a>
            Themes
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>

          <ul className="p-2 bg-base-100">
            {themes.map((item) => (
              <li key={item}>
                <button data-set-theme={item}>{item}</button>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  </header>
);
export default Header;
