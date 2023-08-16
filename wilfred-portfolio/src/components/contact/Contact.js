import React, { useState } from 'react';
import './Contact.css'; // Make sure to create this CSS file for styling

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your own logic here to send the email
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Clear the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
    setIsEmailSent(true);
    // You might want to use a real API call or other logic here to send the email
    // and handle the confirmation message
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      {isEmailSent ? (
        <p className="confirmation-message">Thank you! Your email has been sent.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
