// src/components/Pages/HomePage.js
import React from 'react';
import './HomePage.css';
import profileImage from '../../assets/profile.jpg'; // <--- IMPORT YOUR IMAGE

const HomePage = () => {
  return (
    // Changed div to main for semantic HTML
    <main className="home-container" aria-label="About Mervin Lincoln">
      <header className="home-header">
        <h1>VEMU MERVIN LINCOLN</h1>
        <p className="tagline">Aspiring Software Engineer | CSE Graduate | Cyber Security Enthusiast</p>
      </header>

      {/* Optional: If you want to add a photo - NOW ENABLED */}
      <div className="profile-photo-container">
        <img src={profileImage} alt="Mervin Lincoln" className="profile-photo" loading="lazy" />
      </div>

      <section className="about-me" aria-labelledby="about-me-heading">
        <h2 id="about-me-heading">About Me</h2>
        <p>
          Hello! I'm Mervin Lincoln, a recent Computer Science and Systems Engineering graduate from Andhra University (Class of April 2025).
          I am currently honing my skills as a Software Engineer Intern at Zessta, where I'm gaining hands-on experience with
          Java, Spring Boot, ReactJS, TypeScript, and DevOps practices including Docker and Kubernetes.
        </p>
        <p>
          My primary career goal is to excel as a Software Engineer, building impactful and efficient solutions.
          I also have a keen interest in Cyber Security and am eager to explore opportunities where I can apply and expand my knowledge in this domain.
          During my studies, I had the privilege of serving as a Class Representative for four consecutive years, which helped me develop strong leadership and interpersonal skills.
        </p>
        <p>
          One of my key academic achievements includes developing an <a href="/projects">NLP-Based Resume Screening System</a>,
          which automates and enhances the recruitment process by intelligently matching candidates to job descriptions.
          I'm passionate about leveraging technology to solve real-world problems and continuously advancing my technical abilities.
        </p>
        <p>
          Feel free to explore my projects and experiences, and don't hesitate to <a href="/contact">get in touch</a>!
        </p>
      </section>
    </main>
  );
};

export default HomePage;