import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import messageData from '../Data/MessageData.json'

const MessageDetails = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const section = messageData.find((item) => item.id === sectionId);

  if (!section) {
    // return  <div>Section not found</div>;
    return (
      <div className="modal">
        <div className="modal-content">
          <h3>Section Not Found</h3>
          <p>The section you are looking for does not exist.</p>
          <button onClick={() => navigate("/message")}>Go Back</button>
        </div>
      </div>
    );

  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{section.title}</h3>
        <p>{section.description}</p>
        <button onClick={() => navigate("/message")}>Go Back</button>
      </div>
    </div>
  );
};

export default MessageDetails;
