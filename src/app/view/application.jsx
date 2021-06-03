import React, { useState } from "react";
import SideBar from "../components/application/sidebar/sidebar";
import MobileMenu from "../components/application/mobileMenu/mobileMenu";
import { useHistory } from "react-router-dom";

import "../style/application/application.scss";

export default function Application() {
  const [value, setValue] = useState("");
  let history = useHistory();

  const localData = localStorage.getItem("code");

  const submitHandler = (e) => {
    e.preventDefault();
    setValue(value);
    localStorage.setItem("code", value);
    history.push("/application/dashboard");
  };

  return (
    <div className="application">
      <div className="grid grid_application">
        <SideBar />
        <div className="application_container full-height flex flex_center flex_column">
          {localData ? (
            <p className="complete fs-24 c-primary">
              {window.innerWidth > 900
                ? "Servizio abilitato, utilizza il menù di sinistra per navigare nell'app"
                : "Servizio abilitato, utilizza il menù in basso per navigare nell'app"}
            </p>
          ) : (
            <form
              onSubmit={(e) => submitHandler(e)}
              className="flex flex_center flex_column"
              action=""
            >
              <label className="fs-36 medium spectral c-primary" htmlFor="">
                Insert your code here:
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="btn_cta bg-secondary" type="submit">
                Submit
              </button>
            </form>
          )}

          <MobileMenu status={""} />
        </div>
      </div>
    </div>
  );
}
