import React from "react";
import "../../style/landing/calltoaction.scss";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="cta_container bg-secondary flex">
      <div className="half-container flex_column">
        <p className="c-white fs-48 spectral medium">
          Take care of important people, iscriviti a Care of Ü
        </p>

        <Link to="/signup">
          <button className="btn_cta bg-primary">Registrati</button>
        </Link>
      </div>
      <div className="last-container">
        <span className="c-primary spectral bold fs-96">Ü</span>
      </div>
    </div>
  );
}
