import React from "react";
import "../../style/landing/footer.scss";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
  const moveToDashboard = () => {
    gsap.to(window, {
      scrollTo: "#dashboard",
      duration: 0,
    });
  };

  const moveToChat = () => {
    gsap.to(window, {
      scrollTo: "#chat",
      duration: 0,
    });
  };

  const moveToAnalisi = () => {
    gsap.to(window, {
      scrollTo: "#analisi",
      duration: 0,
    });
  };

  return (
    <footer className="bg-orange">
      <div className="footer_container">
        <div className="footer_logo flex flex_center flex_column">
          <h1 className="white fs-64">Ü</h1>
          <p className="white fs-18">Take care of the important people</p>
        </div>
        <div className="footer_menu flex flex_column">
          <span onClick={moveToDashboard} className="white fs-18">
            <p>Dashboard</p>
          </span>
          <span onClick={moveToChat} className="white fs-18">
            <p>Chat</p>
          </span>
          <span onClick={moveToAnalisi} className="white fs-18">
            <p>Analisi paziente</p>
          </span>
          <span className="white fs-18">
            <p>Partners</p>
          </span>
        </div>
        <div className="footer_menu flex flex_column">
          <span className="white fs-18">
            <p>Chi siamo</p>
          </span>
          <span className="white fs-18">
            <p>Contatti</p>
          </span>
        </div>
      </div>
    </footer>
  );
}
