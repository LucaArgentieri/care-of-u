import React from "react";
import SideBar from "../sidebar/sidebar";

export default function Chat() {
  return (
    <div className="flex">
      <SideBar index={1} />
      <h1>Chat</h1>
    </div>
  );
}
