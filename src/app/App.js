import React, { Suspense, lazy } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import "./style/app.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Auth } from "./firebase/auth";
import PrivateRoute from "./firebase/privateRoute";
import Loading from "../app/components/loading/loading";

const Landing = lazy(() => import("./view/landing"));
const Login = lazy(() => import("./view/login"));
const SignUp = lazy(() => import("./view/signUp"));
const RetrievePassword = lazy(() => import("./view/retrieve_password"));
const Error = lazy(() => import("./view/error"));
const Application = lazy(() => import("./view/application"));
const Dashboard = lazy(() =>
  import("./components/application/dashboard/dashboard")
);
const Chat = lazy(() => import("./components/application/chat/chat"));
const Analisi = lazy(() => import("./components/application/analisi/analisi"));
const Impostazioni = lazy(() =>
  import("./components/application/impostazioni/settings")
);

function App() {
  return (
    <Auth>
      <Router>
        <CssBaseline />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/retrieve-password"
              component={RetrievePassword}
            />

            <PrivateRoute component={Application} path="/application" exact />
            <PrivateRoute component={Dashboard} path="/application/dashboard" />
            <PrivateRoute component={Chat} path="/application/chat" />
            <PrivateRoute component={Analisi} path="/application/analysis" />
            <PrivateRoute
              component={Impostazioni}
              path="/application/settings"
            />

            <Route path="*" component={Error} />
          </Switch>
        </Suspense>
      </Router>
    </Auth>
  );
}

export default App;
