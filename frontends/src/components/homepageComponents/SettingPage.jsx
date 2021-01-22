import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import "./../../style/SettingPage.css";

function SettingPage({ issettinpageActive }) {
  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  const login = JSON.parse(localStorage.getItem("login"));
  const token = login.token.slice(10, 30);

  return (
    <div
      className={
        issettinpageActive
          ? "setting__page setting_page_active"
          : "setting__page"
      }
    >
      <ul className="setting__links">
        <li className="settings__link">
          <Link to={"/website/account/id=" + token} params={{ userId: token }}>
            <AccountCircleIcon className="settings__icon" />
            <span>Account</span>
          </Link>
        </li>

        <li className="settings__link">
          <Link to="#">
            <Brightness4Icon className="settings__icon" />
            <span>Dark mode</span>
          </Link>
        </li>
        <li className="settings__link">
          <Link to="#">
            <InfoIcon className="settings__icon" />
            <span>Info</span>
          </Link>
        </li>
        <li className="settings__link" onClick={logoutHandler}>
          <Link to="#">
            <LockIcon className="settings__icon" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SettingPage;
