import React, { useContext, useEffect, useState } from "react";
import "../../style/landing/landing_hero.scss";
import { AuthContext } from "../../firebase/auth";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import FaceIcon from "@material-ui/icons/Face";
import Video from "../../assets/video.mp4";
gsap.registerPlugin(ScrollToPlugin);

export default function LandingHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener("resize", (evt) => {
      if (window.innerWidth <= 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, [isMobile]);

  const moveToText = () => {
    gsap.to(window, {
      scrollTo: ".landing_text",
      duration: 0,
    });
  };

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="hero">
      <div className="video-container full-height">
        <div className="shape_container">
          <div className="orange_filter bg-secondary"></div>

          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <h1
            className={`title c-white spectral extrabold ${
              isMobile ? "fs-48" : "fs-72"
            }`}
          >
            Care of <span className="c-primary spectral">Ü</span>
          </h1>
          <Link to="/signup">
            <button className="btn_cta bg-primary c-white fs-14">
              {isMobile ? (
                <FaceIcon />
              ) : currentUser ? (
                "Dashboard"
              ) : (
                "Sign Up / Login"
              )}
            </button>
          </Link>
        </div>
      </div>
      <div className="text_container flex flex_center flex_column">
        <h1 className={`c-white regular ${isMobile ? "fs-48" : "fs-96"}`}>
          Take care of{" "}
          <span className="spectral bold c-primary">important</span> people
        </h1>
        <button
          className="btn_cta bg-primary c-white fs-14"
          onClick={moveToText}
        >
          How it works?
        </button>
      </div>
    </div>
  );
}
