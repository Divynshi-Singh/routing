import React from 'react';
import { Link } from 'react-router-dom';
import messageData from "../Data/MessageData.json"

const Message = () => {
  return (
    <div className="container">
      <div className="headings-box">
        {messageData.map((message) => (
          <Link key={message.id} to={`/message/${message.id}`} className="heading">
            <section>
              <h2>{message.title}</h2>
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Message;
