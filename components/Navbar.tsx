import React from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutTheJourney from '../src/app/About/AboutTheJourney';


const Navbar = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/" className="navigation-link">Home</Link>
        </li>
        <li>
          <Link href="/About" className="navigation-link">About Us</Link>
        </li>
        <li>
          <Link href="/" className="navigation-link">Gallery</Link>
        </li>
        <li>
          <Link href="/events" className="navigation-link">Events</Link>
        </li>
        <li>
          <Link href="/contact" className="navigation-link">Contact Us</Link>
        </li>
      </ul>
      <div className="social-links">
        <a href="#" className="social-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;