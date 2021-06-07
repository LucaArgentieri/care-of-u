import React from "react";
import "../../style/landing/landing_text.scss";

export default function LandingText({ title, text, orange }) {
  return (
    <div className="landing_text flex flex_center flex_column">
      <div className="landing_text_container">
        <h1 className={`${orange ? "c-primary" : "c-secondary"} fs-72`}>
          {title}
        </h1>
        <p className="fs-24">{text}</p>
      </div>
    </div>
  );
}
