import React, { useRef, useState, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./chatMessage";
import { firebaseRef, firestore, auth } from "../../../firebase/firebase";
import "../../../style/application/chat/chatRoom.scss";
import SendIcon from "@material-ui/icons/Send";

export default function ChatRoom({ index, show }) {
  const [chatName, setChatName] = useState(null);

  const dummy = useRef();
  const messagesRef = firestore.collection(
    `${index ? `messages${index}` : "messages"}`
  );
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebaseRef.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    switch (index) {
      case 1:
        setChatName("Dottore 1");
        break;
      case 2:
        setChatName("Dottore 2");
        break;
      case 3:
        setChatName("Dottore 3");
        break;
      default:
        break;
    }
  }, [index]);

  return (
    <>
      <div className="chatroom_container bg-primaryOpacity">
        <div className="chatroom_container_name bg-secondary flex c-white fs-18">
          <img
            src={
              "https://clubsports.gcu.edu/wp-content/uploads/Coach-Avator.png"
            }
          />
          {chatName}
        </div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>

        <div className="chatroom_container_form bg-primaryOpacity">
          <form onSubmit={sendMessage}>
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Scrivi un messaggio"
            />

            <button
              type="submit"
              className="bg-secondary"
              disabled={!formValue}
            >
              <SendIcon />
            </button>
          </form>
        </div>
      </div>

      <div
        className="chatroom_container_mobile bg-primaryOpacity"
        className={!show ? "display-none" : "chatroom_container"}
      >
        <div className="chatroom_container_name bg-secondary flex c-white fs-18">
          <img
            src={
              "https://clubsports.gcu.edu/wp-content/uploads/Coach-Avator.png"
            }
          />
          {chatName}
        </div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>

        <div className="chatroom_container_form bg-primaryOpacity">
          <form onSubmit={sendMessage}>
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Scrivi un messaggio"
            />

            <button
              type="submit"
              className="bg-secondary"
              disabled={!formValue}
            >
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
