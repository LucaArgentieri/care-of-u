import React from "react";
import SideBar from "../sidebar/sidebar";
import MobileMenu from "../mobileMenu/mobileMenu";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "../../../style/application/analisi/analisi.scss";
import { codeData } from "../../../data/codeData";
import { Link } from "react-router-dom";

export default function Analisi() {
  const localData = localStorage.getItem("code");
  return (
    <div className="analisi_container">
      <div className="grid grid_application">
        <SideBar index={2} />
        <div className={localData ? "analisi" : ""}>
          {window.innerWidth > 900 ? (
            ""
          ) : (
            <span className="flex flex_center">
              <Link
                className="fs-48 text-center c-primary spectral bold"
                to="/"
              >
                Ü
              </Link>
            </span>
          )}
          <p className="title c-secondary fs-48 lato medium">Analisi</p>

          {localData ? (
            codeData[0].data1.analisiEffettuate.map((el, index) => {
              return (
                <div key={index}>
                  <Card className="card">
                    <CardContent>
                      <p className="fs-24 c-primary">{el.tipo}</p>
                      <p>Esito: {el.esito}</p>
                      <p>{el.descrizione}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })
          ) : (
            <div className="nodata flex flex_center flex_column half-height">
              {window.innerWidth > 900 ? (
                ""
              ) : (
                <span className="flex flex_center">
                  <Link
                    className="fs-48 text-center c-primary spectral bold"
                    to="/"
                  >
                    Ü
                  </Link>
                </span>
              )}
              <p className="fs-24">Dati non disponibili</p>
              <p className="fs-24">
                Inserisci i dati forniti nella struttura ospedaliera
              </p>
              <Link
                className="btn_cta fs-24 c-white bg-primary"
                to="/application"
              >
                <p>Inserisci i dati</p>
              </Link>
            </div>
          )}
        </div>
        <MobileMenu status="analysis" />
      </div>
    </div>
  );
}
