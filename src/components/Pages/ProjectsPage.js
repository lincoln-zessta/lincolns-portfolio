// src/components/Pages/ProjectsPage.js - CORRECTED VERSION
import React from 'react';
import ProjectCard from '../UI/ProjectCard'; // Make sure this path is correct
import { projects } from '../../data/ProjectData.js'; // Or '../../data/MyWorks.js' if you kept that filename

const ProjectsPage = () => {
  // You can add a console.log here if you want to check the projects data
  // console.log("Projects to display:", projects);

  return (
    <div>
      <h2>My Projects</h2>
      {projects && projects.length > 0 ? (
        <div>
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