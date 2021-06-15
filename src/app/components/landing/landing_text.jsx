import React from "react";

import Shape from "../../assets/green-shape.svg";

import "../../style/landing/landing_text.scss";

export default function LandingText({
  title,
  text,
  orange,
  img1,
  img2,
  img3,
  shape,
}) {
  return (
    <div className="landing_flex flex">
      <div className="landing_text flex flex_center flex_column">
        <div className="landing_text_container">
          <h1 className={`${orange ? "c-primary" : "c-secondary"} fs-72`}>
            {title}
          </h1>
          <p className="fs-24">{text}</p>
        </div>
      </div>

      <div className="flex">
        <div className="shape flex flex_end">
          <span className="img1">
            <img src={img1} alt="" />
          </span>
          <span className="img2">
            <img src={img2} alt="" />
          </span>
          <span className="img3">
            <img src={img3} alt="" />
          </span>
          {shape ? <img className="shape" src={Shape} alt="" /> : ""}
        </div>{" "}
      </div>
    </div>
  );
}
