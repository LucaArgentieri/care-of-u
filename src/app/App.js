import React from "react";

import CssBaseline from '@material-ui/core/CssBaseline';
import './style/app.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { Auth } from './firebase/auth'
import PrivateRoute from './firebase/privateRoute'

import Landing from './view/landing'
import Application from './view/application'
// import Chat from './view/chat'
import SignUp from './view/signUp'
import Login from './view/login'
import Error from './view/error'



function App() {


  return (
    <Auth>
      <Router>
        <CssBaseline />

        <Switch>
          <Route exact path="/" children={Landing} />
          <PrivateRoute component={Application} path="/application" exact />
          <Route exact path="/login" children={Login} />
          <Route exact path="/signup" children={SignUp} />
          <Route path="*" children={Error} />
        </Switch>
      </Router>
    </Auth>
  );
}



export default App;
