import React from "react";
import "../../style/dashboard/sideBar.scss";
import app from "../../firebase/firebase";
import { ListItemIcon, ListItem, ListItemText, List } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ForumIcon from "@material-ui/icons/Forum";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { Link } from "react-router-dom";

export default function DashboardSidebar() {
  return (
    <div className="sidebar">
      <Link to="/">
        <h1 className="orange fs-64">Ü</h1>
      </Link>
      <p className="orange fs-18">Nome Utente </p>
      <div className="main_list">
        <List component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Messaggi" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Analisi del paziente" />
          </ListItem>
        </List>
      </div>

      <div className="options_list">
        <List component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Impostazioni" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotificationsActiveIcon />
            </ListItemIcon>
            <ListItemText primary="Notifiche" />
          </ListItem>
        </List>
      </div>

      <div className="signOut_container">
        <button className="btn_cta fs-18" onClick={() => app.auth().signOut()}>
          Sign out
        </button>
      </div>
    </div>
  );
}
