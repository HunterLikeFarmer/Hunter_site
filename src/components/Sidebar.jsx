import React from "react";
import { IconInstagram, IconLinkedin } from "./icons";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-50 p-7 h-screen flex flex-col justify-between">
      <nav>
        <ul className="space-y-6">
          <li className="transform transition duration-300 hover:scale-110">
            <a href="#home" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="transform transition duration-300 hover:scale-110">
            <a href="#books" className="text-white hover:text-gray-400">
              Books
            </a>
          </li>
          <li className="transform transition duration-300 hover:scale-110">
            <a href="#projects" className="text-white hover:text-gray-400">
              Projects
            </a>
          </li>
          <li className="transform transition duration-300 hover:scale-110">
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col space-y-9">
        <a
          href="https://www.instagram.com/hunter_jyh"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
          className="transform transition duration-300 hover:scale-110"
        >
          <IconInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/hunter-jiang-a860a3257"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
          className="transform transition duration-300 hover:scale-110"
        >
          <IconLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
