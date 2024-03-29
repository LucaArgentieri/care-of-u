import React from "react";
import SideBar from "../sidebar/sidebar";
import ContactsBar from "./contactsBar";
import "../../../style/application/chat/chat.scss";
import MobileMenu from "../mobileMenu/mobileMenu";
import { Link } from "react-router-dom";

export default function Chat() {
  const localData = localStorage.getItem("code");

  return (
    <>
      <div className={localData ? "chat_container full-height" : "dashboard"}>
        <SideBar index={1} />

        {localData ? (
          <ContactsBar index={1} />
        ) : (
          <div className="nodata flex flex_center flex_column half-height">
            {window.innerWidth > 900 ? (
              ""
            ) : (
              <span className="flex flex_center">
                <Link
                  className="fs-48 text-center c-primary spectral bold"
                  to="/"
                >
                  Ü
                </Link>
              </span>
            )}
            <p className="fs-24">Dati non disponibili</p>
            <p className="fs-24">
              Inserisci i dati forniti nella struttura ospedaliera
            </p>
            <Link
              className="btn_cta bg-primary c-white fs-24"
              to="/application"
            >
              <p>Inserisci i dati</p>
            </Link>
          </div>
        )}

        <MobileMenu status="chat" />
      </div>
    </>
  );
}
