import Image from "next/image";

import monogram from "../assets/photos/Monogram.png";

const menuItems = [
  { name: "Work", link: "#work" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
];

// see `tailwind.config.js`
const themes = ["default", "light", "dark", "coffee"];

const MenuItems = () => (
  <>
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

      <ul className="p-2 bg-base-100 right-full left-auto lg:right-auto z-10">
        {themes.map((item) => (
          <li key={item}>
            <button data-set-theme={item}>{item}</button>
          </li>
        ))}
      </ul>
    </li>
  </>
);

const Header = () => (
  <>
    <header className="navbar bg-base-300 justify-between">
      <div className="navbar-start">
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
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <MenuItems />
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <MenuItems />
          </ul>
        </div>
      </div>
    </header>
  </>
);
export default Header;
