import React, { useState } from "react";
import ChatRoom from "./chatRoom";
import { ListItemIcon, ListItem, ListItemText, List } from "@material-ui/core";
import "../../../style/application/chat/contactsBar.scss";

export default function ContactsBar({ index }) {
  const [selectedIndex, setSelectedIndex] = useState(index);
  const [show, setShow] = useState(false);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

    if (window.innerWidth < 900) {
      setShow(true);
    }
  };

  return (
    <>
      <div className="sidebar flex flex_column contacts_bar">
        <div className="single_bar_user">
          <List>
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <img
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
                  src={
                    "https://clubsports.gcu.edu/wp-content/uploads/Coach-Avator.png"
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Dottore 3" />
            </ListItem>
          </List>
        </div>
      </div>
      <ChatRoom index={selectedIndex} />

      <div className="contacts_bar_mobile">
        <div
          className="sidebar flex flex_column contacts_bar"
          className={show ? "display-none" : "contacts_bar"}
        >
          <div className="single_bar_user">
            <List className={show ? "display-none" : ""}>
              <ListItem
                button
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <img
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
                    src={
                      "https://clubsports.gcu.edu/wp-content/uploads/Coach-Avator.png"
                    }
                  />
                </ListItemIcon>
                <ListItemText primary="Dottore 3" />
              </ListItem>
            </List>
          </div>
        </div>
        <ChatRoom index={selectedIndex} show={show} />
      </div>
    </>
  );
}
