import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase/firebase";
import { AuthContext } from "../firebase/auth";
import LoginSignupGoogleBtn from "../components/login/login_signup_googlebtn";
import "../style/login-register/login-register.scss";

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
    <div className="login_container">
      <div className="flex flex_center">
        <h1 className="orange fs-72">Ü</h1>
      </div>
      <div className="title flex flex_center">
        <h1 className="green fs-72">Login</h1>
      </div>

      <div className="form_container flex flex_center flex_column">
        <LoginSignupGoogleBtn title="Login" />

        <p className="divider">Or</p>

        <form
          onSubmit={handleLogin}
          className="form flex flex_center flex_column"
        >
          <input name="email" type="email" placeholder="Email" />

          <input name="password" type="password" placeholder="Password" />

          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
