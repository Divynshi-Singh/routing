import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'navbar-link active-link' : 'navbar-link')}
        end
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'navbar-link active-link' : 'navbar-link')}
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/message"
        className={({ isActive }) => (isActive ? 'navbar-link active-link' : 'navbar-link')}
      >
        Messages
      </NavLink>
    </nav>
  );
};

export default Navbar;
