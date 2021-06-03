import React from "react";
import LandingHero from "../components/landing/landing_hero";
import LandingText from "../components/landing/landing_text";
import LandingPreview from "../components/landing/landing_preview";
import Partners from "../components/landing/partners";
import CallToAction from "../components/landing/calltoaction";
import Footer from "../components/landing/footer";
import "../style/landing/landing.scss";

import Shape from "../assets/green-shape.svg";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";

export default function Landing() {
  return (
    <div className="landing">
      <LandingHero />
      <LandingText
        orange={false}
        title={"Prenditi cura delle persone importanti"}
        text={
          "Care of u è un servizio nato dall'esigenza di voler facilitare la comunicazione tra ospedale e famigliari oppure amici del paziente. Stiamo lavorando per rendere questo servizio sempre più scalabile ed utilizzabile anche come servizio di comunicazione per vaccini, visite ed altre operazioni."
        }
      />
      <div className="shape flex flex_end">
        <img src={Shape} alt="" />
        <span className="img1">
          <img src={Img1} alt="" />
        </span>
        <span className="img2">
          <img src={Img2} alt="" />
        </span>
      </div>
      <LandingText
        orange={true}
        title={"Come funziona?"}
        text={
          "Per abilitare Care of Ü, l’utente necessita di un codice utente che viene fornito dalla struttura sanitaria che ospita il paziente. Una volta effettutato l’accesso alla piattaforma, inserisci il codice ed avrai a disposizione tutte le funzionalità dell’app."
        }
      />
      <div className="shape flex flex_end">
        <img src={Shape} alt="" />
      </div>
      <LandingPreview
        right={true}
        green={true}
        title={"Dashboard"}
        id={`dashboard`}
        text={"Ciao a tutti, Ciao ciao ciao a tuttiii ciao a tutti ciao ciao"}
      />
      <LandingPreview
        right={false}
        green={false}
        title={"Chat"}
        id={"chat"}
        text={"Ciao a tutti, Ciao ciao ciao a tuttiii ciao a tutti ciao ciao"}
      />
      <LandingPreview
        right={true}
        green={true}
        title={"Controllo analisi del paziente"}
        id={"analisi"}
        text={"Ciao a tutti, Ciao ciao ciao a tuttiii ciao a tutti ciao ciao"}
      />
      <Partners />
      <CallToAction />
      <Footer />
    </div>
  );
}
