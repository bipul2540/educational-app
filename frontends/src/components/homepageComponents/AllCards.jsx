import React from "react";
import "./../../style/AllCards.css";
import PostCard from "./PostCard";
import UsersCard from "./UsersCard";

function AllCards({ isfullpagepost, setFullPagePost }) {
  return (
    <div className="all__cards">
      <div className="all__cards__container">
        <PostCard
          isfullpagepost={isfullpagepost}
          setFullPagePost={setFullPagePost}
        />
        <UsersCard />
        <UsersCard />
        <UsersCard />
      </div>
    </div>
  );
}

export default AllCards;
