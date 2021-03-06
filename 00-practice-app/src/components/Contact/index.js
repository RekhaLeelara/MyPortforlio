//importing the necessary files
import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';


//To display the contents displayed in the Contact page

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [errorMessage, setErrorMessage] = useState('');
  const [messageSent, setMessageSent] = useState('')
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {

      let userData = {
        name: document.querySelector('.name').value,
        email: document.querySelector('.email').value,
        message: document.querySelector('.message').value,
      }
      setMessageSent('Message Has Sent!')
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      // console.log("setFormStateemail", formState);
    }
  };

  //   function handleSubmit(e) {
  //     e.preventDefault();
  // }


  return (
    <section>
      <h1 data-testid="h1tag">Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" className="name" defaultValue={name} onBlur={handleChange} />
        </div>

        <div className="field">
          <label htmlFor="email">Email address: </label>
          <input type="email" name="email" className="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="message">Message: </label>
          <textarea name="message" rows="15" columns="20" className="message" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" className="button" type="submit">Submit</button>
        <h3>{messageSent}</h3>
      </form>
    </section>
  );
}

//Exporting the Contact page contents
export default Contact;