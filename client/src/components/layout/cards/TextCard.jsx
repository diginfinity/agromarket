import React from 'react';

function TextCard({ title, text }) {
  return (
    <div className="text-card-container">
      <h2 className="uk-text-bold">{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default TextCard;
