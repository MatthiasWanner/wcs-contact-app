import React from "react";
import "../css/Contact.css";

function Contact({ name, avatar, online }) {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="user avatar" />
      <div>
        <h4 className="name">{name}</h4>
        <p className="status status-text">
          <div className={online ? "status-online" : "status-offline"}></div>
          {online ? "online" : "offline"}
        </p>
      </div>
    </div>
  );
}

export default Contact;
