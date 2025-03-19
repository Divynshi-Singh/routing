import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        About Us
      </Link>
      <Link to="/contact" className="navbar-link">
        Contact Us
      </Link>
      <Link to="/message" className="navbar-link">
        Messages
      </Link>
    </nav>
  );
};

export default Navbar;
