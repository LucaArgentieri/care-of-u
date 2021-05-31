import React from "react";
import SideBar from "../sidebar/sidebar";
import MobileMenu from "../mobileMenu/mobileMenu";
import "../../../style/application/analisi/analisi.scss";

export default function Analisi() {
  return (
    <div className="grid grid_application">
      <SideBar index={2} />
      <div className="analisi">
        <p className="c-secondary fs-48 lato medium">Analisi</p>
      </div>
      <MobileMenu status="analysis" />
    </div>
  );
}
