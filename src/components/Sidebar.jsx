import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-6">
      <h2 className="text-2xl font-bold mb-6">My Website</h2>
      <nav>
        <ul>
          <li className="mb-2"><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
          <li className="mb-2"><Link to="/about" className="text-white hover:text-gray-400">About</Link></li>
          <li className="mb-2"><Link to="/projects" className="text-white hover:text-gray-400">Projects</Link></li>
          <li className="mb-2"><Link to="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
