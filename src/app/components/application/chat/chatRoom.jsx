import React, { useRef, useState, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firebaseRef, firestore, auth } from "../../../firebase/firebase";
import SendIcon from "@material-ui/icons/Send";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { gsap } from "gsap";
import "../../../style/application/chat/chatRoom.scss";
import ChatMessage from "./chatMessage";

export default function ChatRoom({ index }) {
  const [chatName, setChatName] = useState(null);

  const closeMessage = () => {
    gsap.to(".chatroom_container_mobile", {
      duration: 0,
      display: "none",
    });
  };

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
      <div>
        <div className="chatroom_container bg-primaryOpacity">
          <div className="chatroom_container_name bg-secondary flex c-white fs-18">
            <img
              alt="avatar"
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

        <div className="chatroom_container_mobile bg-white display-none">
          <div className="chatroom_container_name bg-secondary flex c-white fs-18">
            <span className="flex flex_center" onClick={closeMessage}>
              <ArrowBackIosIcon />
            </span>
            <img
              alt="avatar"
              src={
                "https://clubsports.gcu.edu/wp-content/uploads/Coach-Avator.png"
              }
            />
            {chatName}
          </div>
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

          <span ref={dummy}></span>

          <div className="chatroom_container_form bg-white">
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
      </div>
    </>
  );
}
