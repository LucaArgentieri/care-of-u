import React from "react";
import "../../style/landing/landing_preview.scss";
import OrangeShape from "../../assets/orange-shape.svg";
import GreenShape from "../../assets/green-shape.svg";

export default function LandingPreview({ right, green, title, text, id, img }) {
  return (
    <div id={id} className={`landing_preview`}>
      <h2 className={`fs-64 ${green ? "c-secondary" : "c-primary"}`}>
        {title}
      </h2>

      <div className={`flex ${right ? "flex_regular" : "flex_reverse"}`}>
        <p className="fs-24">{text}</p>
        <div
          className={`landing_preview_shape_container ${
            !right ? "landing_preview_shape_container_reverse" : ""
          }`}
        >
          <img className="screen" src={img} alt="" />
          {!green ? (
            <img className="green_shape_down" src={GreenShape} alt="" />
          ) : (
            <img className="orange_shape_down" src={OrangeShape} alt="" />
          )}
        </div>
      </div>
    </div>
  );
}
