import React from "react";
import SideBar from "../sidebar/sidebar";
import ContactsBar from "./contactsBar";
import "../../../style/application/chat/chat.scss";
import MobileMenu from "../mobileMenu/mobileMenu";

export default function Chat() {
  return (
    <div className="chat_container full-height">
      <SideBar index={1} />
      <ContactsBar index={1} />
      <MobileMenu status="chat" />
    </div>
  );
}
