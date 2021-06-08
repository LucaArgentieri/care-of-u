import React from "react";
import "../style/login-register/login-register.scss";

import { Link } from "react-router-dom";
import EmailLogo from "../assets/email.svg";
import GreenShape from "../assets/green-shape.svg";
import OrangeShape from "../assets/orange-shape.svg";
import app from "../firebase/firebase";

export default function RetrievePassword() {
  const handleLogin = () => {
    var auth = app.auth();
    var emailAddress = "email";

    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        alert(emailAddress);
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <div className="login_container full-height flex flex_center flex_column">
      <div className="flex flex_center">
        <Link to="/">
          <h1 className="c-primary  fs-72">Ü</h1>
        </Link>
      </div>
      <div className="title flex flex_center">
        <h1 className="c-secondary fs-72">Retrieve password</h1>
      </div>

      <div className={`landing_preview_shape_container`}>
        <img className="orange-shape" src={OrangeShape} alt="" />
        <img className="green-shape" src={GreenShape} alt="" />
      </div>

      <div className="form_container flex flex_center flex_column">
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

          <button type="submit" className="fs-18">
            Retrieve
          </button>
        </form>
      </div>
    </div>
  );
}
