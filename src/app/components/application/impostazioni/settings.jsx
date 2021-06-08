import React from "react";
import SideBar from "../sidebar/sidebar";
import "../../../style/application/impostazioni/settings.scss";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import MobileMenu from "../mobileMenu/mobileMenu";
import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <div className="settings">
      <div className="grid grid_application">
        <SideBar index={3} />
        <div className="settings_container">
          {window.innerWidth > 900 ? (
            ""
          ) : (
            <span className="flex flex_center">
              <Link
                className="fs-48 text-center c-primary spectral bold"
                to="/"
              >
                Ü
              </Link>
            </span>
          )}
          <p className="c-secondary fs-48 lato medium">Impostazioni</p>
          <div className="settings_container_single flex flex_column">
            <span className="c-dark fs-24 lato medium">
              <span>Tema</span>
              <span>
                <select className="select-text">
                  <option defaultValue="1">Light</option>
                  <option disabled defaultValue="2">
                    Dark
                  </option>
                </select>
              </span>
            </span>
            <span className="c-dark fs-24 lato medium">
              <span>Lingua</span>
              <span>
                <select className="select-text">
                  <option defaultValue="1">Italiano</option>
                  <option disabled defaultValue="2">
                    English
                  </option>
                </select>
              </span>
            </span>
            <span className="c-dark fs-24 lato medium">
              <span>Suoni e volume</span>
              <span className="volume">
                <VolumeDown />
                <label className="pure-material-slider">
                  <input type="range" min="0" max="100" />
                </label>
                <VolumeUp />
              </span>
            </span>
            <span className="c-dark fs-24 lato medium">
              <span>Dimensione caratteri</span>
              <span>
                <select className="select-text">
                  <option disabled defaultValue="1">
                    Piccola
                  </option>
                  <option defaultValue="2">
                    Media
                  </option>
                  <option disabled defaultValue="2">
                    Grande
                  </option>
                </select>
              </span>
            </span>
            <span className="c-dark fs-24 lato medium ">
              <span>Versione app</span>
              <p className="c-grey fs-18 lato ">1.0.0 Alpha</p>
            </span>
          </div>
        </div>
        <MobileMenu status="settings" />
      </div>
    </div>
  );
}
