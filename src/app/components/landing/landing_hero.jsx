import React, { useContext } from "react";
import "../../style/landing/landing_hero.scss";
import { AuthContext } from "../../firebase/auth";
import GreenShape from "../../assets/green-shape.svg";
import OrangeShape from "../../assets/orange-shape.svg";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function LandingHero() {
  const moveToText = () => {
    gsap.to(window, {
      scrollTo: ".landing_text",
      duration: 0,
    });
  };

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="shape_container">
        <img className="orange_shape" src={OrangeShape} alt="" />
        <img className="green_shape" src={GreenShape} alt="" />

        <Link to="/signup">
          <button className="btn_cta c-white fs-14">
            {currentUser ? "Dashboard" : "Sign Up / Login"}
          </button>
        </Link>
      </div>

      <div className="text_container flex flex_center flex_column">
        <h1 className="c-primary fs-64">Ü</h1>
        <h1 className="c-secondary fs-64">Take care of the important people</h1>

        <button className="btn_cta c-white fs-14" onClick={moveToText}>
          How it works?
        </button>
      </div>

      <div className="shape_container">
        <img className="orange_shape_down" src={OrangeShape} alt="" />
        <img className="green_shape_down" src={GreenShape} alt="" />
      </div>
    </>
  );
}
