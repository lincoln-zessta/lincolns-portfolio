// src/components/UI/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, liveDemoLink } = project;

  return (
    <div className="project-card">
      <h3>{title}</h3>
      
      {Array.isArray(description) ? (
        <ul>
          {description.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
      ) : (
        <p>{description}</p>
      )}

      {technologies && technologies.length > 0 && (
        <div className="technologies">
          <strong>Technologies:</strong> {technologies.join(', ')}
        </div>
      )}
      <div className="project-links">
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