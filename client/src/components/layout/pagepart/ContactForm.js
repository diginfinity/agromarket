import React, { useState } from 'react';

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    issue: "",
    message: ""
  })

  const { name, phone, company, email, issue, message } = data
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted");
  }

  return (
    <form onSubmit={onSubmit} className="uk-width-1-1 uk-padding uk-padding-remove-horizontal bg-form">
      <div className="uk-width-4-5 uk-margin-auto">
        <h3 className="white">Kontaktirajte nas putem forme:</h3>
        <div className="uk-margin-top">
          <label htmlFor="name" className="white">Ime i prezime: (Obavezno)</label>
          <input
            value={name}
            onChange={onChange}
            placeholder="Ukucajte Vase ime i prezime"
            type="text"
            className="uk-input uk-border-rounded"
          />
        </div>
        <div className="uk-margin-top">
          <label htmlFor="phone" className="white">Telefon: (Obavezno)</label>
          <input
            value={phone}
            onChange={onChange}
            placeholder="Ukucajte Vas broj telefona"
            type="text"
            className="uk-input uk-border-rounded"
          />
        </div>
        <div className="uk-margin-top">
          <label htmlFor="company" className="white">Ime firme:</label>
          <input
            value={company}
            onChange={onChange}
            placeholder="Ukucajte ime firme"
            type="text"
            className="uk-input uk-border-rounded"
          />
        </div>
        <div className="uk-margin-top">
          <label htmlFor="email" className="white">E-mail: (Obavezno)</label>
          <input
            value={email}
            onChange={onChange}
            placeholder="Ukucajte Vas e-mail"
            type="text"
            className="uk-input uk-border-rounded"
          />
        </div>
        <div className="uk-margin-top">
          <label htmlFor="issue" className="white">U vezi:</label>
          <select name="issue" className="uk-select uk-border-rounded">
            <option value="~~~~">~~~~</option>
          </select>
        </div>
        <div className="uk-margin-top">
          <label htmlFor="message" className="white">Poruka</label>
          <textarea
            name="message"
            value={message}
            onChange={onChange}
            placeholder="Upisite Vasu poruku"
            className="uk-textarea contact-form-textarea"
          />
        </div>
        <div className="uk-margin-top">
          <input
            type="submit"
            value="Posalji"
            className="contact-form-submit white uk-text-bold"
          />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
