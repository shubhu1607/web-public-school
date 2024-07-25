import React from 'react';

const Footer = () => (
  <footer style={{ backgroundColor: 'Highlight', color: 'black', marginTop: '20px', padding: '10px', textAlign: 'center' }}>
    <div>
      <div>
        &copy; {new Date().getFullYear()} Springdale Public School
      </div>
    </div>
  </footer>
);

export default Footer;
