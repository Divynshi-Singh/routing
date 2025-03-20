import React from 'react';
import contact from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left side - Image */}
      <div className="contact-image">
        <img src={contact} alt="Contact" className="contact-img" />
      </div>
      {/* Right side - Contact Text */}
      <div className="contact-text">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          We are here to assist you. If you have any questions, concerns, <br /> or inquiries, feel free to reach out to us using the contact details provided below.
          <br /> We look forward to connecting with you!
        </p>
        <h3 className="contact-subtitle">Visit Us</h3>
        <p className="contact-info">1234 Business Avenue, Suite 500, City, Country</p>
        <h3 className="contact-subtitle">Email Us</h3>
        <p className="contact-info">innovative@company.com</p>
        <h3 className="contact-subtitle">Call Us</h3>
        <p className="contact-info">+1 (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Contact;