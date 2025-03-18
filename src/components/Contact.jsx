import React from 'react';
import contact from '../assets/contact.jpg';
const Contact = () => {
  return (
    <div className="flex items-center justify-between p-6 overflow-hidden">
      {/* Left side - Image */}
      <div className="w-1/2  overflow-hidden">
        <img src={contact} alt="Contact" className="h-[640px] w-full object-cover" />
      </div>
      {/* Right side - Contact Text */}
      <div className="w-1/2 pl-6 ml-[20px] mb-[150px]">
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg mb-4">
          We are here to assist you. If you have any questions, concerns, <br /> or inquiries, feel free to reach out to us using the contact details provided below.
          <br /> We look forward to connecting with you!
        </p>
        <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
        <p className="text-lg mb-4">1234 Business Avenue, Suite 500, City, Country</p>
        <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
        <p className="text-lg mb-4">innovative@company.com</p>
        <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
        <p className="text-lg">+1 (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Contact;