import React from 'react';

function ContactCard({ name, title, email, phone }) {
  return (
    <div className="uk-padding-small uk-width-1-3@m uk-width-1-2@l">
      <h4 className="uk-padding-small uk-padding-remove-horizontal uk-text-bold black uk-margin-remove">{name}</h4>
      <p className="black uk-margin-remove">{title}</p>
      <p className="text-primary uk-margin-remove">{email}</p>
      <p className="black uk-margin-remove">{phone}</p>
    </div>
  );
}

export default ContactCard;
