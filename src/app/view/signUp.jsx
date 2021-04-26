import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {Link} from 'react-router-dom'
import app from "../firebase/firebase";
import {AuthContext} from '../firebase/auth'
import LoginSignupGoogleBtn from '../components/login/login_signup_googlebtn'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/application");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/application" />;
  }

  return (
    <div>
      <h1>Sign up</h1>
      <LoginSignupGoogleBtn title="Sign Up"/>

    

      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>

      <p>Do you already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default withRouter(SignUp);