import React from 'react';

const Header = ({ setCurrentPage }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#" onClick={() => setCurrentPage('home')}>Springdale Public School</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setCurrentPage('home')}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setCurrentPage('about')}>About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setCurrentPage('academics')}>Academics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setCurrentPage('admissions')}>Admissions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setCurrentPage('faculty')}>Faculty</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setCurrentPage('students')}>Students</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setCurrentPage('gallery')}>Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setCurrentPage('contact')}>Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
