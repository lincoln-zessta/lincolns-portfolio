// src/components/UI/SkillItem.js
import React from 'react';
import './SkillItem.css'; // We'll create this CSS file

const SkillItem = ({ skillName }) => {
  return (
    <li className="skill-item">
      {skillName}
    </li>
  );
};

export default SkillItem;