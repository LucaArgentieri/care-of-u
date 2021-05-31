import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import "./style/app.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Auth } from "./firebase/auth";
import PrivateRoute from "./firebase/privateRoute";

import Landing from "./view/landing";
import SignUp from "./view/signUp";
import Login from "./view/login";
import RetrievePassword from "./view/retrieve_password";
import Error from "./view/error";

import Application from "./view/application";
import Dashboard from "./components/application/dashboard/dashboard";
import Chat from "./components/application/chat/chat";
import Analisi from "./components/application/analisi/analisi";
import Impostazioni from "./components/application/impostazioni/settings";

function App() {
  return (
    <Auth>
      <Router>
        <CssBaseline />

        <Switch>
          <Route exact path="/" children={Landing} />
          <Route exact path="/login" children={Login} />
          <Route exact path="/signup" children={SignUp} />
          <Route exact path="/retrieve-password" children={RetrievePassword} />

          <PrivateRoute component={Application} path="/application" exact />
          <PrivateRoute component={Dashboard} path="/application/dashboard" />
          <PrivateRoute component={Chat} path="/application/chat" />
          <PrivateRoute component={Analisi} path="/application/analysis" />
          <PrivateRoute component={Impostazioni} path="/application/settings" />

          <Route path="*" children={Error} />
        </Switch>
      </Router>
    </Auth>
  );
}

export default App;
