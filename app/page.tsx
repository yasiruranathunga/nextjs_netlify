// app/page.tsx
import React from 'react';

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true" // Enables Netlify's form handling
      action="/success" // Redirect URL after submission
    >
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

const HomePage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default HomePage;
