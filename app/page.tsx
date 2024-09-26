"use client";
import { useState } from 'react';

export const getStaticProps = () => {
  return {
    props: {}, // No data needed, static page
  };
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={(e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., fetch, axios, etc.)
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <input type="hidden" name="form-name" value="contact" />

      <label style={{ marginBottom: '10px', fontWeight: '500' }}>
        Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1rem',
          }}
        />
      </label>

      <label style={{ marginBottom: '10px', fontWeight: '500' }}>
        Email:
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1rem',
          }}
        />
      </label>

      <label style={{ marginBottom: '10px', fontWeight: '500' }}>
        Message:
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1rem',
            height: '100px',
            resize: 'vertical',
          }}
        ></textarea>
      </label>

      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#005bb5')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0070f3')}
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
