// src/components/UI/ProjectCard.js
import React from 'react';
import './ProjectCard.css'; // Import the CSS file

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, technologies, githubLink, liveDemoLink } = project;

  return (
    <div className="project-card"> {/* Main class for styling */}
      <h3>{title}</h3>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <p>{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="technologies"> {/* Class for technologies section */}
          <strong>Technologies:</strong> {technologies.join(', ')}
        </div>
      )}
      <div className="project-links"> {/* Class for links section */}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
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