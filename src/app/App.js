import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";


import CssBaseline from '@material-ui/core/CssBaseline';
import './style/app.scss'


import Landing from './view/landing'
import Application from './view/application'

import Login from '../app/components/chatroom'
import RoomList from '../app/components/roomlist'
import AddRoom from '../app/components/addroom'
import ChatRoom from '../app/components/chatroom'


import Error from './view/error'

function App() {

  let location = useLocation();


  return (
    <Router>
      <CssBaseline />

      <Redirect
        to={{
          pathname: "/roomlist",
          state: { from: location }
        }}
      />

      <Switch>
        <Route exact path="/" children={Landing} />

        //chat
        <Route path="/login">
          <Login />
        </Route>
        <SecureRoute path="/roomlist">
          <RoomList />
        </SecureRoute>
        <SecureRoute path="/addroom">
          <AddRoom />
        </SecureRoute>
        <SecureRoute path="/chatroom/:room">
          <ChatRoom />
        </SecureRoute>

        <Route path="/application" children={Application} />
        <Route path="*" children={Error} />
      </Switch>
    </Router>
  );
}


function SecureRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('nickname') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
