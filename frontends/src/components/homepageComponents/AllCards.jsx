import React from "react";
import "./../../style/AllCards.css";
import UsersCard from "./UsersCard";

function AllCards() {
  return (
    <div className="all__cards">
      <div className="all__cards__container">
        <UsersCard />
        <UsersCard />
        <UsersCard />
      </div>
    </div>
  );
}

export default AllCards;
