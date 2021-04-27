import React, { useEffect, useContext, useState } from "react";
import { signInWithGoogle } from "../../firebase/firebase";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../firebase/auth";
import GoogleLogo from "../../assets/google.svg";

export default function LoginSignupGoogleBtn({ title }) {
  const user = useContext(AuthContext);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (user) {
      setredirect("/application");
    }
  }, [user]);
  if (redirect) {
    <Redirect to={redirect} />;
  }

  return (
    <button className="btn_google fs-18" onClick={signInWithGoogle}>
      <img src={GoogleLogo} alt="" />
      <p>{title} with Google</p>
    </button>
  );
}
