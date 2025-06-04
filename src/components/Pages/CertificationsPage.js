// src/components/Pages/CertificationsPage.js
import React from 'react';
import CertificationItem from '../UI/CertificationItem';
import { items as certificationItems } from '../../data/certificationsData'; // Using 'as' to avoid name clash if needed
import './CertificationsPage.css'; // We'll create this

const CertificationsPage = () => {
  return (
    <div className="certifications-page-container">
      <h2>Certifications & Achievements</h2>
      {certificationItems && certificationItems.length > 0 ? (
        <div className="certifications-list">
          {certificationItems.map(item => (
            <CertificationItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p>No certifications or achievements to display yet.</p>
      )}
    </div>
  );
};

export default CertificationsPage;