import React from 'react';
// Later you might import ProjectCard and projectData here
// import { projects } from '../../data/projectData';
// import ProjectCard from '../UI/ProjectCard';


const ProjectsPage = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <p>Here you'll see a showcase of my work.</p>
      {/*
        Example of how you might map projects later:
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      */}
    </div>
  );
};

export default ProjectsPage;