import React from "react";
import { auth } from "../../../firebase/firebase";
import "../../../style/application/chat/chatMessage.scss";

export default function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className="message_container">
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL ||
            "https://clubsports.gcu.edu/wp-content/uploads/Coach-Avator.png"
          }
        />
        <p className="c-white fs-18">{text}</p>
      </div>
    </div>
  );
}
