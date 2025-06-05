// src/components/Layout/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} Vemu Mervin Lincoln. All Rights Reserved.</p>
      <div className="footer-links">
        {/* Example social links - uncomment and update hrefs if you want to use them */}
        {/*
        <a href="https://github.com/Mervin769" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/mervinlincolnvemu" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        */}
      </div>
    </footer>
  );
};

export default Footer;
