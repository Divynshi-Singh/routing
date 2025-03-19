// import React, { useState } from 'react';

// const Message = () => {
//   const [activeSection, setActiveSection] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const handleSectionClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsModalOpen(true);
//   };

//   const handleGoBack = () => {
//     setIsModalOpen(false);
//     setActiveSection(null);
//   };

//   const getTitleAndDescription = (sectionId) => {
//     switch (sectionId) {
//       case 1:
//         return {
//           title: 'General Information',
//           description: 'In this section, you will find an overview of our company, including our mission, vision, and values. We provide insight into the various services we offer to cater to different needs, helping our clients achieve their goals. Whether you’re a first-time visitor or a long-term partner, this section offers essential information that sets the foundation for understanding our approach and how we can collaborate with you.'
//         };
//       case 2:
//         return {
//           title: 'Terms and Conditions',
//           description: 'The Terms and Conditions section is crucial for understanding the legal framework under which we operate. It outlines the rules and guidelines for using our services, the rights and responsibilities of both the company and users, as well as the limitations of liability. We encourage all users to read this section carefully to ensure compliance and avoid any misunderstandings or issues while using our platform.'
//         };
//       case 3:
//         return {
//           title: 'Privacy Policy',
//           description: 'Our Privacy Policy is designed to provide transparency regarding the data we collect, how we use it, and how we safeguard your personal information. This section explains our commitment to privacy and security, detailing the measures we take to protect your data and how you can control your information. It also covers our practices regarding cookies, third-party data sharing, and how to manage your preferences.'
//         };
//       case 4:
//         return {
//           title: 'FAQs',
//           description: 'The Frequently Asked Questions (FAQ) section is a helpful resource for those seeking quick answers to common inquiries about our products, services, and policies. Whether you’re looking for troubleshooting tips, how to get started, or clarifications on our processes, this section aims to provide the answers in an easily accessible format. If you have any questions that are not addressed here.'
//         };
//       default:
//         return {
//           title: 'Unknown Section',
//           description: 'The selected section does not exist. Please try again later or contact our support team for assistance.'
//         };
//     }
//   };

//   const { title, description } = getTitleAndDescription(activeSection);

//   return (
//     <div className="container">
//       {/* Headings box centered */}
//       <div className="headings-box">
//         <section onClick={() => handleSectionClick(1)} className="heading">
//           <h2>General Information</h2>
//         </section>
//         <section onClick={() => handleSectionClick(2)} className="heading">
//           <h2>Terms and Conditions</h2>
//         </section>
//         <section onClick={() => handleSectionClick(3)} className="heading">
//           <h2>Privacy Policy</h2>
//         </section>
//         <section onClick={() => handleSectionClick(4)} className="heading">
//           <h2>FAQs</h2>
//         </section>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>{title}</h3>
//             <p>{description}</p>
//             <button onClick={handleGoBack}>Go Back</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Message;

























// Message.js
import React from 'react';
import { Link } from 'react-router-dom';

const Message = () => {
  return (
    <div className="container">
      <div className="headings-box">
        <section className="heading">
          <Link to="/message/1">
            <h2>General Information</h2>
          </Link>
        </section>
        <section className="heading">
          <Link to="/message/2">
            <h2>Terms and Conditions</h2>
          </Link>
        </section>
        <section className="heading">
          <Link to="/message/3">
            <h2>Privacy Policy</h2>
          </Link>
        </section>
        <section className="heading">
          <Link to="/message/4">
            <h2>FAQs</h2>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Message;
