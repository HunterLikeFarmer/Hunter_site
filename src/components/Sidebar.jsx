import React from 'react';
import { Link } from 'react-router-dom';
import {IconInstagram, IconLinkedin} from './icons';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-52 p-7">
      <h2 className="text-2xl font-bold mb-6">Hunter Jiang</h2>
      <nav>
        <ul>
          <li className="mb-6 transform transition duration-300 hover:scale-110">
            <Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
          <li className="mb-6 transform transition duration-300 hover:scale-110">
            <Link to="/about" className="text-white hover:text-gray-400">About</Link></li>
          <li className="mb-6 transform transition duration-300 hover:scale-110">
            <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link></li>
          <li className="mb-6 transform transition duration-300 hover:scale-110">
            <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
        </ul>
      </nav>
      <div className="absolute bottom-12 left-6 flex flex-col space-y-9"> 
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
          href="https://www.linkedin.com/in/your-linkedin"
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
