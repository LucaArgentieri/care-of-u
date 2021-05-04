import React from "react";
import LandingHero from "../components/landing/landing_hero";
import LandingText from "../components/landing/landing_text";
import LandingPreview from "../components/landing/landing_preview";
import Partners from "../components/landing/partners";
import CallToAction from "../components/landing/calltoaction";
import Footer from "../components/landing/footer";

export default function Landing() {
  return (
    <div>
      <LandingHero />
      <LandingText
        orange={false}
        title={"Take care of the important people"}
        text={
          "Care of u è un servizio nato dallesigenza di voler facilitare la comunicazione tra ospedale e famigliari oppure amici del paziente. Stiamo lavorando per rendere questo servizio sempre più scalabile ed utilizzabile anche come servizio di comunicazione per vaccini, visite ed altre operazioni."
        }
      />
      <LandingText
        orange={true}
        title={"Come funziona?"}
        text={
          "Per abilitare Care of Ü, l’utente necessita di un codice utente che viene fornito dalla struttura sanitaria che ospita il paziente. Una volta effettutato l’accesso alla piattaforma, inserisci il codice ed avrai a disposizione tutte le funzionalità dell’app."
        }
      />
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
