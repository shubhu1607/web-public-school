import React from 'react';
import ContactForm from '../components/contactform';

const ContactUsPage = () => (
  <div style={{backgroundColor:'lemonchiffon'}}>
     
    <h1>Contact Us</h1>
    <ContactForm />
    <h2>Address</h2>
    <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
    <h2>Phone</h2>
    <p>+1 (123) 456-7890</p>
    <h2>Email</h2>
    <p>info@springdale.edu</p>
    <h2>Location</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086219806287!2d144.9537358153232!3d-37.81720967975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774c16f5fcd217!2sVictoria%20Harbour%20Promenade%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1633023296574!5m2!1sen!2sus"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
);

export default ContactUsPage;
