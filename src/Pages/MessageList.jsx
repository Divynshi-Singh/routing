import React from 'react';
import { Link } from 'react-router-dom';
import messageData from "../Data/MessageData.json"

const Message = () => {
  return (
    <div className="container">
      <div className="headings-box">
        {messageData.map((section) => (
          <section key={section.id} className="heading">
            <Link to={`/message/${section.id}`}>
              <h2>{section.title}</h2>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Message;
