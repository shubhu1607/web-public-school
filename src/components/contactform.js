import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '10px'}}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="formName" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
        <input 
          type="text" 
          id="formName" 
          name="name" 
          placeholder="Enter your name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="formEmail" style={{ display: 'block', marginBottom: '5px' }}>Email address</label>
        <input 
          type="email" 
          id="formEmail" 
          name="email" 
          placeholder="Enter your email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="formMessage" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
        <textarea 
          id="formMessage" 
          name="message" 
          rows="3" 
          placeholder="Enter your message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Submit</button>
    </form>
  );
};

export default ContactForm;
