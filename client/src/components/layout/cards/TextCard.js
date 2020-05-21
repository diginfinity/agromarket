import React from 'react';

function TextCard({ title, text }) {
  return (
    // <div className="uk-width-1-2@m uk-padding-small uk-card text-card-container">
    //   <h2 className="uk-text-bold">{title}</h2>
    //   <p>{text}</p>
    // </div>
    <div className="uk-padding-remove uk-margin-top text-card-width">
      <div className="uk-card uk-card-body text-card-container">
        <h2 className="uk-text-bold">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default TextCard;
