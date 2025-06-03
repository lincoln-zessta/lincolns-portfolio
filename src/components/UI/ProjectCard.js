// src/components/UI/ProjectCard.js
import React from 'react';
// import './ProjectCard.css'; // We'll create this later for styling

const ProjectCard = ({ project }) => {
  // Destructure the project prop to easily access its properties
  const { title, description, imageUrl, technologies, githubLink, liveDemoLink } = project;

  return (
    <div className="project-card" style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3>{title}</h3>
      {imageUrl && <img src={imageUrl} alt={title} style={{ maxWidth: '100%', height: 'auto', marginBottom: '15px' }} />}
      <p>{description}</p>
      {technologies && technologies.length > 0 && (
        <div style={{ marginBottom: '15px' }}>
          <strong>Technologies:</strong> {technologies.join(', ')}
        </div>
      )}
      <div className="project-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            View Code (GitHub)
          </a>
        )}
        {liveDemoLink && (
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;