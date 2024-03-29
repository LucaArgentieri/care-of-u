import React, { useContext } from "react";
import "../../style/landing/landing_hero.scss";
import { AuthContext } from "../../firebase/auth";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import FaceIcon from "@material-ui/icons/Face";
import Video from "../../assets/video.webm";
import VideoFrame from "../../assets/videoframe.png";
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
      <div className="hero">
        <div className="video-container full-height">
          <div className="shape_container">
            <div className="orange_filter bg-secondary"></div>

            <video autoPlay loop muted poster={VideoFrame}>
              <source src={Video} type="video/mp4" />
            </video>
            <h1 className="title c-white spectral  fs-72">
              Care of <span className="c-primary spectral bold ">Ü</span>
            </h1>
            <Link to="/signup">
              <button className="btn_cta bg-primary c-white fs-24">
                <FaceIcon />
                {currentUser ? (
                  <p>Entra nell'app</p>
                ) : (
                  <p>Registrati / Accedi</p>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div className="text_container flex flex_center flex_column">
          <h1 className={`c-white  fs-96`}>
            Take care of{" "}
            <span className="spectral bold c-primary">important</span> people
          </h1>
          <button
            className="btn_cta bg-primary c-white fs-24"
            onClick={moveToText}
          >
            <p>Scopri di più</p>
          </button>
        </div>
      </div>
      {/* Mobile */}
      <div className="hero_mobile">
        <div className="video-container full-height">
          <div className="shape_container">
            <div className="orange_filter bg-secondary"></div>

            <video autoPlay loop muted poster={VideoFrame}>
              <source src={Video} type="video/mp4" />
            </video>
            <h1 className="title c-white spectral extrabold fs-48">
              <span className="c-primary spectral">Ü</span>
            </h1>
            <Link to="/signup" name="home_button">
              <button className="btn_cta bg-primary c-white fs-14">
                <FaceIcon />
                {currentUser ? (
                  <p>&nbsp; Entra nell'app</p>
                ) : (
                  <p>&nbsp; Registrati / Accedi</p>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div className="text_container flex flex_center flex_column">
          <h1 className="c-white regular fs-48">
            Take care of{" "}
            <span className="spectral bold c-primary">important</span> people
          </h1>
          <button
            className="btn_cta bg-primary c-white fs-24"
            onClick={moveToText}
          >
            <p>Scopri di più</p>
          </button>
        </div>
      </div>
    </>
  );
}
