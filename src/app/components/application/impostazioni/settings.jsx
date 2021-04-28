import React from "react";
import SideBar from "../sidebar/sidebar";

export default function Settings() {
  return (
    <div className="flex">
      <SideBar index={3} />
      <div className="settings_container">
        <h1>Settings</h1>
      </div>
    </div>
  );
}
