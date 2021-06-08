import React, { useState } from "react";
import { ListItemIcon, ListItem, ListItemText, List } from "@material-ui/core";
import "../../../style/application/chat/chatMobile.scss";
import ChatRoom from "../chat/chatRoom";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function ChatMobile() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    gsap.to(".chatroom_container_mobile", {
      duration: 0,
      display: "initial",
    });
  };
  return (
    <div className={"chatMobile"}>
      <div className="single_bar_user_mobile">
        {window.innerWidth > 900 ? (
          ""
        ) : (
          <span className="flex flex_center">
            <Link className="fs-48 text-center c-primary spectral bold" to="/">
              Ü
            </Link>
          </span>
        )}
        <p className="c-secondary fs-48 lato medium">Chat</p>

        <List>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <img
                alt="avatar"
                src={
                  "https://clubsports.gcu.edu/wp-content/uploads/Coach-Avator.png"
                }
              />
            </ListItemIcon>
            <ListItemText primary="Dottore 1" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              {" "}
              <img
                alt="avatar"
                src={
                  "https://clubsports.gcu.edu/wp-content/uploads/Coach-Avator.png"
                }
              />
            </ListItemIcon>
            <ListItemText primary="Dottore 2" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              {" "}
              <img
                alt="avatar"
                src={
                  "https://clubsports.gcu.edu/wp-content/uploads/Coach-Avator.png"
                }
              />
            </ListItemIcon>
            <ListItemText primary="Dottore 3" />
          </ListItem>
        </List>
      </div>
      <ChatRoom index={selectedIndex} />
    </div>
  );
}
