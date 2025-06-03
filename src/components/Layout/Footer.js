// src/components/Layout/Footer.js
import React from 'react';
// You might want to add a CSS file for the Footer later
// import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer style={{
      textAlign: 'center',
      padding: '20px',
      borderTop: '1px solid #ccc',
      marginTop: '40px', // Add some space above the footer
      backgroundColor: '#f8f8f8' // Consistent with the navbar example
    }}>
      <p>&copy; {currentYear} Vemu Mervin Lincoln. All Rights Reserved.</p>
      {/* You can add links to your social profiles here too if you like */}
      {/* For example:
      <div>
        <a href="https://github.com/Mervin769" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px'}}>GitHub</a>
        <a href="https://www.linkedin.com/in/mervinlincolnvemu" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px'}}>LinkedIn</a>
      </div>
      */}
    </footer>
  );
};

export default Footer;