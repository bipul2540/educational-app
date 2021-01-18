import React from "react";
import "./../../style/Sidebar.css";
import { Avatar, IconButton, Link } from "@material-ui/core";
import items from "./sidebarItems";

function Sidebar({ isActiveBurger }) {
  return (
    <div className={isActiveBurger ? "sidebar sidebar__active" : "sidebar"}>
      <div className="sidebar__container">
        <div className="user__bar">
          <div className="content__icon">
            <Avatar src="https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg" />
          </div>
          <div className="content__title">
            <span>Bipul kumar</span>
          </div>
        </div>
        <ul className="sidebar__links">
          {items.map((item) => {
            return (
              <li key={item.id} className="sidebar__link">
                <Link to="/#" className="anchor__link">
                  <div className="content__icon">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="content__title">
                    <span>{item.title}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
