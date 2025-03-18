
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex bg-[#6c757d] h-[70px]  shadow-md mx-auto justify-between items-center pl-[30px] pr-[30px]">
      
        <Link to="/about" className="text-[white] text-[20px] font-semibold hover:text-[blue] no-underline  transition duration-300 ease-in-out">
          About Us
        </Link>
        <Link to="/contact" className="text-[white] text-[20px] font-semibold hover:text-[blue] no-underline transition duration-300 ease-in-out">
          Contact Us
        </Link>
        <Link to="/message" className="text-[white] text-[20px] font-semibold hover:text-[blue] no-underline transition duration-300 ease-in-out">
          Messages
        </Link>
    
    </nav>
  );
};

export default Navbar;










