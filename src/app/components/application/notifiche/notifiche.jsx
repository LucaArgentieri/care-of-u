import React from "react";
import SideBar from "../sidebar/sidebar";
import "../../../style/application/notifiche/notifiche.scss";

export default function Notifiche() {
  return (
    <div className="grid grid_application">
      <SideBar index={4} />
      <div className="notifiche">
        <p className="c-secondary fs-48 lato medium">Notifiche</p>
      </div>
    </div>
  );
}
