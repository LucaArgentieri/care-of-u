import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ForumIcon from "@material-ui/icons/Forum";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SettingsIcon from "@material-ui/icons/Settings";

import { Link } from "react-router-dom";

import "../../../style/application/mobileMenu/mobileMenu.scss";

export default function MobileMenu(props) {
  return (
    <div className="mobileMenu bg-primary">
      <div className="container">
        <Link to="/application/dashboard">
          <DashboardIcon
            className={props.status === "dashboard" ? "active" : ""}
          />
        </Link>

        <Link to="/application/chat">
          <ForumIcon className={props.status === "chat" ? "active" : ""} />
        </Link>
        <Link to="/application/analysis">
          <AssessmentIcon
            className={props.status === "analysis" ? "active" : ""}
          />
        </Link>
        <Link to="/application/settings">
          <SettingsIcon
            className={props.status === "settings" ? "active" : ""}
          />
        </Link>
      </div>
    </div>
  );
}
