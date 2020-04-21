import React from 'react';

function TitleCard({ title }) {
  return (
    <div className="title-card-container">
      <h2 className="title-card-content">{title}</h2>
    </div>
  );
}

export default TitleCard;
