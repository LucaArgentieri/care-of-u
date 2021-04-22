import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import CssBaseline from '@material-ui/core/CssBaseline';
import './style/app.scss'


import Landing from './view/landing'
import Application from './view/application'
import Error from './view/error'

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/" children={Landing} />
        <Route path="/application" children={Application} />
        <Route path="*" children={Error} />
      </Switch>
    </Router>
  );
}

export default App;
