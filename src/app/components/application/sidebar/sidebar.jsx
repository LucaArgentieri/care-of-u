import React, { useContext } from "react";
import app from "../../../firebase/firebase";
import { ListItemIcon, ListItem, ListItemText, List } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ForumIcon from "@material-ui/icons/Forum";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { Link } from "react-router-dom";
import "../../../style/application/sidebar/sideBar.scss";
import { AuthContext } from "../../../firebase/auth";

export default function DashboardSidebar({ index }) {
  const { currentUser } = useContext(AuthContext);

  const [selectedIndex, setSelectedIndex] = React.useState(index);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="sidebar">
      <Link to="/">
        <h1 className="c-primary fs-64">Ü</h1>
      </Link>
      <p className="c-primary fs-18">{currentUser.displayName}</p>
      <div className="main_list">
        <List component="nav">
          <Link to="/application/dashboard">
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>

          <Link to="/application/chat">
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary="Messaggi" />
            </ListItem>
          </Link>

          <Link to="/application/analysis">
            <ListItem
              button
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Analisi del paziente" />
            </ListItem>
          </Link>
        </List>
      </div>

      <div className="options_list">
        <List component="nav">
          <Link to="/application/settings">
            <ListItem
              button
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Impostazioni" />
            </ListItem>
          </Link>

          <Link to="/application/notifications">
            <ListItem
              button
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <NotificationsActiveIcon />
              </ListItemIcon>
              <ListItemText primary="Notifiche" />
            </ListItem>
          </Link>
        </List>
      </div>

      <div className="signOut_container">
        <button className="btn_cta fs-14" onClick={() => app.auth().signOut()}>
          Sign out
        </button>
      </div>
    </div>
  );
}
