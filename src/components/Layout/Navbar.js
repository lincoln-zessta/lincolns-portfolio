// src/components/Layout/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Use className from CSS file */}
      <div className="navbar-logo">
        <NavLink to="/"> {/* Changed to NavLink for consistency, though Link is fine for a logo */}
          Lincoln'S Portfolio
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active-nav-link" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? "active-nav-link" : ""}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) => isActive ? "active-nav-link" : ""}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => isActive ? "active-nav-link" : ""}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certifications"
            className={({ isActive }) => isActive ? "active-nav-link" : ""}
          >
            Certifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? "active-nav-link" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;