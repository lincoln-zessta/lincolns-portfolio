// src/components/UI/ExperienceItem.js
import React from 'react';
import './ExperienceItem.css'; // We'll create this CSS file

const ExperienceItem = ({ experience }) => {
  const { role, company, duration, description, location } = experience;

  return (
    <div className="experience-item">
      <h3>{role}</h3>
      <p className="company-duration">
        <strong>{company}</strong> | <span>{duration}</span>
        {location && <span className="location"> | {location}</span>}
      </p>
      {Array.isArray(description) ? (
        <ul>
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
};

export default ExperienceItem;