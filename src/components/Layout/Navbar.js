// src/components/Layout/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
// You might want to add a CSS file for the Navbar later
// import './Navbar.css';

const Navbar = () => {
  return (
    <nav style={{
      padding: '10px 20px',
      borderBottom: '1px solid #ccc',
      backgroundColor: '#f8f8f8', // A light background for the navbar
      display: 'flex',
      justifyContent: 'space-between', // Example: to space out logo and links
      alignItems: 'center'
    }}>
      <div className="logo">
        {/* You can put your name or a logo here */}
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '1.5em' }}>
          Mervin Lincoln
        </Link>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link></li>
        <li><Link to="/projects" style={{ textDecoration: 'none', color: '#333' }}>Projects</Link></li>
        <li><Link to="/experience" style={{ textDecoration: 'none', color: '#333' }}>Experience</Link></li>
        {/* Add links for Skills, Certifications later if you want them in the main nav */}
        <li><Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;