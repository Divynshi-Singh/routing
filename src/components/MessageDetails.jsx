// MessageDetails
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MessageDetails = () => {
  const { sectionId } = useParams();  
  const navigate = useNavigate(); 

  const getTitleAndDescription = (sectionId) => {
    switch (sectionId) {
      case '1':
        return {
          title: 'General Information',
          description: 'In this section, you will find an overview of our company, including our mission, vision, and values. We provide insight into the various services we offer to cater to different needs, helping our clients achieve their goals...'
        };
      case '2':
        return {
          title: 'Terms and Conditions',
          description: 'The Terms and Conditions section is crucial for understanding the legal framework under which we operate...'
        };
      case '3':
        return {
          title: 'Privacy Policy',
          description: 'Our Privacy Policy is designed to provide transparency regarding the data we collect, how we use it, and how we safeguard your personal information...'
        };
      case '4':
        return {
          title: 'FAQs',
          description: 'The Frequently Asked Questions (FAQ) section is a helpful resource for those seeking quick answers to common inquiries...'
        };
      default:
        return {
          title: 'Unknown Section',
          description: 'The selected section does not exist.'
        };
    }
  };

  const { title, description } = getTitleAndDescription(sectionId);

  return (
    <div className="modal">
         <div className="modal-content">
             <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => navigate(-1)}>Go Back</button> 
           </div>
     
    </div>
  );
};

export default MessageDetails;
