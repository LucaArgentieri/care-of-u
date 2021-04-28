import React from "react";
import "../../../style/application/dashboard/dashboard.scss";

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

export default function SimpleCard() {
  return (
    <div className="flex">
      <SideBar index={0} />

      <div className="dashboard_container flex flex_wrap">
        <Card className="card">
          <CardContent>
            <ClickEvents />
          </CardContent>
        </Card>
        <Card className="card">
          <h1 className="fs-24">Doughnut</h1>

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
  );
}
