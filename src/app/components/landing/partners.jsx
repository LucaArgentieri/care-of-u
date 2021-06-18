import React from "react";
import "../../style/landing/partners.scss";

import FateBeneFratelli from "../../assets/fatebenefratelli.png";
import Humanitas from "../../assets/humanitas.png";
import Niguarda from "../../assets/niguarda.png";
import SanDonato from "../../assets/sandonato.png";
import SanRaffaele from "../../assets/sanraffaele.png";

export default function Partners() {
  return (
    <div className="partners">
      <p className="c-primary fs-48 spectral medium">Partners</p>
      <div className="images_container">
        <a
          alt="fate bene fratelli"
          target="_blank"
          rel="noreferrer"
          href="https://www.asst-fbf-sacco.it/"
        >
          {" "}
          <img src={FateBeneFratelli} alt="" />
        </a>
        <a
          alt="humanitas"
          target="_blank"
          rel="noreferrer"
          href="https://www.humanitas.it/"
        >
          {" "}
          <img src={Humanitas} alt="" />
        </a>
        <a
          alt="niguarda"
          target="_blank"
          rel="noreferrer"
          href="https://www.ospedaleniguarda.it/"
        >
          {" "}
          <img src={Niguarda} alt="" />
        </a>
        <a
          alt="san donato"
          target="_blank"
          rel="noreferrer"
          href="https://www.grupposandonato.it/strutture/policlinico-san-donato"
        >
          {" "}
          <img src={SanDonato} alt="" />
        </a>
        <a
          alt="san raffaele"
          target="_blank"
          rel="noreferrer"
          href="https://www.hsr.it/"
        >
          {" "}
          <img src={SanRaffaele} alt="" />
        </a>
      </div>
    </div>
  );
}
