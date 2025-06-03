// src/components/Pages/ExperiencePage.js
import React from 'react';
import ExperienceItem from '../UI/ExperienceItem';
import { experiences } from '../../data/experienceData';
import './ExperiencePage.css'; // We'll create this for page-specific styles

const ExperiencePage = () => {
  return (
    <div className="experience-page-container">
      <h2>My Experience</h2>
      {experiences && experiences.length > 0 ? (
        <div className="experience-list">
          {experiences.map(exp => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      ) : (
        <p>No professional experience to display yet.</p>
      )}
    </div>
  );
};

export default ExperiencePage;