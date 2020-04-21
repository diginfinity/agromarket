import React from 'react';

function ContactCard({ name, title, email, phone }) {
  return (
    <div className="contact-card-container">
      <h4 className="uk-text-bold black uk-margin-remove">{name}</h4>
      <p className="black uk-margin-remove">{title}</p>
      <p className="text-primary uk-margin-remove">{email}</p>
      <p className="black uk-margin-remove">{phone}</p>
    </div>
  );
}

export default ContactCard;
