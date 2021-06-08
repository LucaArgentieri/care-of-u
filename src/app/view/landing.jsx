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
import Img3 from "../assets/ticketimg.png";
import DashboardScreen from "../assets/dashboardscreen.jpg";
import ChatScreen from "../assets/chatscreen.jpg";
import AnalisiScreen from "../assets/analisiscreen.jpg";

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
        <span className="img1">
          <img src={Img1} alt="" />
        </span>
        <span className="img2">
          <img src={Img2} alt="" />
        </span>
        <img className="shape" src={Shape} alt="" />
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
        <span className="img3">
          <img src={Img3} alt="" />
        </span>
      </div>
      <LandingPreview
        right={true}
        green={true}
        title={"Dashboard"}
        id={`dashboard`}
        text={
          "Grazie alla dashboard potrai avere sempre sott’occhio la cartella clinica del paziente e tutti i dati, sia della persona che dello stato di salute"
        }
        img={DashboardScreen}
      />
      <LandingPreview
        right={false}
        green={false}
        title={"Chat"}
        id={"chat"}
        text={
          "La chat è configurata in modo da poter avere già nei contatti 3 dottori esperti nelle loro aree di competenza così da poter subito chiedere informazioni"
        }
        img={ChatScreen}
      />
      <LandingPreview
        right={true}
        green={true}
        title={"Controllo analisi del paziente"}
        id={"analisi"}
        text={
          "La sezione analisi del paziente permette di visualizzare tutti gli esami fatti dal paziente con relativi esiti e commenti del medico specializzato."
        }
        img={AnalisiScreen}
      />
      <Partners />
      <CallToAction />
      <Footer />
    </div>
  );
}
