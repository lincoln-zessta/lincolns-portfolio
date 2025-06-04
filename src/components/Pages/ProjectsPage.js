// src/components/Pages/ProjectsPage.js
import React from 'react';
import ProjectCard from '../UI/ProjectCard';
import { projects } from '../../data/ProjectData.js'; // Update if filename differs
import './ProjectsPage.css'; // Don't forget this import

const ProjectsPage = () => {
  return (
    <div className="projects-page-container">
      <h2>My Projects</h2>
      {projects && projects.length > 0 ? (
        <div className="projects-list-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects to display yet. Check back soon!</p>
      )}
    </div>
  );
};

export default ProjectsPage;
