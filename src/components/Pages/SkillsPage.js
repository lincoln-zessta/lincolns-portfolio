// src/components/Pages/SkillsPage.js
import React from 'react';
import SkillItem from '../UI/SkillItem';
import { skillCategories } from '../../data/skillsData';
import './SkillsPage.css';

const SkillsPage = () => {
  return (
    <div className="skills-page-container">
      <h1>MY SKILLS</h1>
      {skillCategories && skillCategories.length > 0 ? (
        skillCategories.map(category => (
          <section key={category.id} className="skill-category">
            <h3>{category.name}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, index) => (
                <SkillItem key={index} skillName={skill} />
              ))}
            </ul>
          </section>
        ))
      ) : (
        <p>No skills to display yet.</p>
      )}
    </div>
  );
};

export default SkillsPage;