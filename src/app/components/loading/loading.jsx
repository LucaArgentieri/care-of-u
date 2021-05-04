import React from "react";
import GreenShape from "../../assets/green-shape.svg";
import OrangeShape from "../../assets/orange-shape.svg";
import "../../style/loading/loading.scss";

export default function Loading() {
  return (
    <div className="full-height flex flex_center flex_column">
      <div className="loading_container flex flex_center flex_column">
        <div>
          <img src={GreenShape} alt="" />
          <img src={OrangeShape} alt="" />
        </div>
        <h1 className="c-primary fs-48">Loading...</h1>
      </div>
    </div>
  );
}
