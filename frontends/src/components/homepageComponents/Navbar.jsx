import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import "./../../style/Navbar.css";

function Navbar({ isActiveBurger, setActiveBurger }) {
  const burgerHandler = () => {
    setActiveBurger(!isActiveBurger);
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="nav__left__panel">
          <div className="logo">
            <img
              src="https://cdn5.f-cdn.com/contestentries/1288866/18872827/5ab6c09bcfde6_thumb900.jpg"
              alt="main-logo"
            />
          </div>
          <div className="search__bar">
            <form action="">
              <input type="text" />
              <IconButton className="search__button">
                <SearchIcon className="search__icon" />
              </IconButton>
            </form>
          </div>
          <div className="burger">
            <IconButton
              className={
                isActiveBurger
                  ? "burger__button button__active"
                  : "burger__button"
              }
              onClick={burgerHandler}
            >
              <i className="fas fa-bars"></i>
            </IconButton>
          </div>
        </div>
        <div className="nav__right__panel">
          <IconButton className="rihgt__icon__buttton">
            <AddIcon className="nav__icon" />
          </IconButton>
          <IconButton className="rihgt__icon__buttton">
            <ChatIcon className="nav__icon" />
          </IconButton>
          <IconButton className="rihgt__icon__buttton">
            <NotificationsIcon className="nav__icon" />
          </IconButton>
          <IconButton className="rihgt__icon__buttton">
            <ArrowDropDownIcon className="nav__icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
