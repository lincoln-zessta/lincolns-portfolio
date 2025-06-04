// src/components/UI/CertificationItem.js
import React from 'react';
import './CertificationItem.css'; // We'll create this

const CertificationItem = ({ item }) => {
  const { title, issuer, date, description, type } = item;

  return (
    <div className="certification-item">
      <span className="item-type">{type}</span>
      <h3>{title}</h3>
      <p className="issuer-date">
        <strong>{issuer}</strong> {date && <>| <span>{date}</span></>}
      </p>
      {description && <p className="description">{description}</p>}
    </div>
  );
};

export default CertificationItem;