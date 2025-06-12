// src/components/Pages/ContactPage.js
import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <h2>Get In Touch</h2>
      <p>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        If you have any questions or just want to say hi, feel free to reach out!
      </p>
      <div className="contact-methods">
        <a href="mailto:mervinlincolnvemu@gmail.com" className="btn">
          Email Me: mervinlincolnvemu@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/vemu-mervin-lincoln" target="_blank" rel="noopener noreferrer" className="btn">
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactPage;