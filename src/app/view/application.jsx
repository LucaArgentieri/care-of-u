import React from "react";
import SideBar from "../components/application/sidebar/sidebar";
import GreenShape from "../assets/green-shape.svg";
import OrangeShape from "../assets/orange-shape.svg";

import "../style/application/application.scss";

export default function Application() {
  return (
    <div className="flex">
      <SideBar />
      <div className="application_container full-height flex flex_center">
        <div className="application_container_shapes">
          <img src={GreenShape} alt="" />
          <img src={OrangeShape} alt="" />
        </div>
      </div>
    </div>
  );
}
