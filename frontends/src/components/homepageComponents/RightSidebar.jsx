import React from "react";
import items from "./rightSidebarItems";
import { Link } from "react-router-dom";
import "./../../style/RightSidebar.css";

function RightSidebar() {
  return (
    <div className="rightsidebar">
      <div className="rightsidebar__container">
        <div className="rightsidebar__header">
          <h2>filter your choices</h2>
        </div>
        <ul className="rightsidebar__content">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <Link to="#">
                  <div className="rightside__icon">
                    <img src={item.img__icon} alt="" />
                  </div>
                  <div className="rightside__title">
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

export default RightSidebar;
