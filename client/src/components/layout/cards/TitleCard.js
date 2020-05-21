import React from 'react';

function TitleCard({ title }) {
  return (
    <div className="title-card-container">
      <h2 className="uk-display-inline-block uk-padding-small uk-padding-remove-vertical text-white">{title}</h2>
    </div>
  );
}

export default TitleCard;
