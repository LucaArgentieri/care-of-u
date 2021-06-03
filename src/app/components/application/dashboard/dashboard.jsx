import React from "react";
import MobileMenu from "../mobileMenu/mobileMenu";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SideBar from "../sidebar/sidebar";
import ClickEvents from "./charts/clickevents";
import Crazy from "./charts/crazy";
import DoughnutChart from "./charts/doughnut";
import Dynamic from "./charts/dynamic";
import GroupedBar from "./charts/groupedBar";
import HorizontalBar from "./charts/horizontalBar";
import Line from "./charts/line";
import MultiAxes from "./charts/multiAxes";
import MultiType from "./charts/multiType";
import Pie from "./charts/pie";
import Polar from "./charts/polar";
import Radar from "./charts/radar";
import Scatter from "./charts/scatter";
import StackedBar from "./charts/stackedBar";
import VerticalBar from "./charts/verticalBar";
import { Link } from "react-router-dom";
import { codeData } from "../../../data/codeData";
import "../../../style/application/dashboard/dashboard.scss";

export default function SimpleCard() {
  const localData = localStorage.getItem("code");

  return (
    <div className="dashboard">
      <SideBar index={0} />

      {localData ? (
        <div className="dashboard_container flex flex_wrap flex_column">
          {window.innerWidth > 900 ? (
            ""
          ) : (
            <span className="flex flex_center">
              <Link
                className="fs-48 text-center c-primary spectral medium"
                to="/"
              >
                Ü
              </Link>
            </span>
          )}
          <p className="c-secondary fs-48 lato medium">Dashboard</p>
          <div className="container flex flex_wrap">
            <Card className="card">
              <CardContent>
                <p className="fs-24">
                  Paziente: {codeData[0].data1.nome} {codeData[0].data1.cognome}
                </p>
                <p className="fs-24">Età: {codeData[0].data1.eta}</p>
                <p className="fs-24">Sesso: {codeData[0].data1.sesso}</p>
                <p className="fs-24">
                  Ricoverato il: {codeData[0].data1.dataRicovero}
                </p>
                <p className="fs-24">
                  Luogo ricovero: {codeData[0].data1.ospedale}
                </p>
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <ClickEvents />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <DoughnutChart />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <Crazy />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <Dynamic />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <GroupedBar />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <HorizontalBar />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <Line />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <MultiAxes />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <MultiType />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <Pie />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <Polar />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <Radar />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <Scatter />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <StackedBar />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <VerticalBar />
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="nodata flex flex_center flex_column half-height">
          <p className="fs-24">Dati non disponibili</p>
          <p className="fs-24">
            Inserisci i dati forniti nella struttura ospedaliera
          </p>
          <Link className="btn_cta bg-primary" to="/application">
            Inserisci i dati
          </Link>
        </div>
      )}

      <MobileMenu status={"dashboard"} />
    </div>
  );
}
