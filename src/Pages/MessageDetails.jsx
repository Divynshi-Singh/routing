import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import messageData from '../Data/MessageData.json';

const MessageDetails = () => {
  const { messageId } = useParams();
  const navigate = useNavigate();

  const message = messageData.find((item) => item.id === messageId);

  return (

    <>
      <div className={message ? "modal" : "message-not-found"}>
        <div className={message ? "modal-content" : ""}>
          {message ? (
            <>
              <h3>{message.title}</h3>
              <p>{message.description}</p>
            </>
          ) : (
            <h3>Message Not Found</h3>
          )}
          <button onClick={() => navigate("/message")}>Go Back</button>
        </div>
      </div>
    </>



  );
};

export default MessageDetails;
