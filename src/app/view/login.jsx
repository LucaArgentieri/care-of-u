import React, { useCallback, useContext } from "react";

import "../style/login-register/login-register.scss";

import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import app from "../firebase/firebase";
import { AuthContext } from "../firebase/auth";
import LoginSignupGoogleBtn from "../components/login/login_signup_googlebtn";
import PasswordLogo from "../assets/password.svg";
import EmailLogo from "../assets/email.svg";

import GreenShape from "../assets/green-shape.svg";
import OrangeShape from "../assets/orange-shape.svg";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/application");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/application" />;
  }

  return (
    <div className="login_container full-height flex flex_center flex_column">
      <div className="flex flex_center">
        <Link to="/">
          <h1 className="c-primary fs-72">Ü</h1>
        </Link>
      </div>
      <div className="title flex flex_center">
        <h1 className="c-secondary fs-72">Login</h1>
      </div>

      <div className={`landing_preview_shape_container`}>
        <img className="orange-shape" src={OrangeShape} alt="" />
        <img className="green-shape" src={GreenShape} alt="" />
      </div>

      <div className="form_container flex flex_center flex_column">
        <LoginSignupGoogleBtn title="Login" />

        <div className="divider line one-line">OR</div>

        <form
          onSubmit={handleLogin}
          className="form flex flex_center flex_column"
        >
          <div className="input_container">
            <input
              className="fs-18"
              name="email"
              type="email"
              placeholder="Email"
            />
            <img src={EmailLogo} alt="" />
          </div>

          <div className="input_container">
            <input
              className="fs-18"
              name="password"
              type="password"
              placeholder="Password"
            />
            <img src={PasswordLogo} alt="" />
            <p>
              Forgot password?{" "}
              <Link to="/retrieve-password" className="c-secondary">
                Retrieve your password here
              </Link>
            </p>
          </div>

          <button type="submit" className="fs-18">
            Log in
          </button>
        </form>
        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="c-secondary">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default withRouter(Login);
