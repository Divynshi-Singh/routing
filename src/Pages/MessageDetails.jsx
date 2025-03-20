import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import messageData from '../Data/MessageData.json';

const MessageDetails = () => {
  const { messageId } = useParams();
  const navigate = useNavigate();

  const message = messageData.find((item) => item.id === messageId);
  if (!message) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h3>Message Not Found</h3>
          <p>The message you are looking for does not exist.</p>
          <button onClick={() => navigate("/message")}>Go Back</button>
        </div>
      </div>
    );
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{message.title}</h3>
        <p>{message.description}</p>
        <button onClick={() => navigate("/message")}>Go Back</button>
      </div>
    </div>
  );
};

export default MessageDetails;
