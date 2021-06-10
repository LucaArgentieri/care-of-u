import React, { useEffect, useState } from "react";
import MobileMenu from "../mobileMenu/mobileMenu";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SideBar from "../sidebar/sidebar";
import Line from "./charts/line";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { schedulerData } from "../../../data/calendarData";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Link } from "react-router-dom";
import { codeData } from "../../../data/codeData";
import "../../../style/application/dashboard/dashboard.scss";

export default function SimpleCard() {
  const localData = localStorage.getItem("code");

  const [data, setData] = useState({});

  useEffect(() => {
    setData({ data: new Date().toLocaleString("it-IT", { day: "numeric" }) });
  }, []);

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
                className="fs-48 text-center c-primary spectral bold"
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
                <p className="fs-36 lato medium">Dati anagrafici</p>
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
              <CardContent className="line">
                <Line
                  label="Temperatura"
                  data={[34, 35, 36, 37.5, 37, 36.5]}
                  reverse={false}
                  time={["10:30", "11:00", "12:30", "13:00", "13:30", "14"]}
                />
              </CardContent>
            </Card>

            <Card className="card">
              <CardContent className="line">
                <Line
                  label="Frequenza respiratoria"
                  data={[16, 17, 18, 16, 17, 18]}
                  reverse={true}
                  time={["10:30", "10:31", "10:32", "10:33", "10:34", "10:35"]}
                />
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent className="line">
                <Line
                  label="Frequenza cardiaca"
                  data={[70, 65, 70, 65, 70, 75, 80]}
                  reverse={false}
                  time={["10:30", "10:31", "10:32", "10:33", "10:34", "10:35"]}
                />
              </CardContent>
            </Card>
          </div>

          <p className="c-secondary fs-48 lato medium">Calendario paziente</p>
          <Card>
            <Scheduler data={schedulerData}>
              <ViewState currentDate={data} />
              <DayView startDayHour={9} endDayHour={18} />
              <Appointments />
            </Scheduler>
          </Card>
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
