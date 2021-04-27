import React from "react";
import LandingHero from "../components/landing/landing_hero";
import LandingText from "../components/landing/landing_text";
import LandingPreview from "../components/landing/landing_preview";
import Footer from "../components/landing/footer";

export default function Landing() {
  return (
    <div>
      <LandingHero />
      <LandingText />
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
      <Footer />
    </div>
  );
}
