import React, { useState } from "react";
import Navbar from "./homepageComponents/Navbar";
import "./../style/Homepage.css";
import Sidebar from "./homepageComponents/Sidebar";
import PostCard from "./homepageComponents/PostCard";
import RightSidebar from "./homepageComponents/RightSidebar";

function Homepage() {
  const [isActiveBurger, setActiveBurger] = useState(false);
  return (
    <div className="homepage">
      <Navbar
        isActiveBurger={isActiveBurger}
        setActiveBurger={setActiveBurger}
      />
      <Sidebar isActiveBurger={isActiveBurger} />
      <div className="main__content__container">
        <PostCard />
      </div>
      <RightSidebar />
    </div>
  );
}

export default Homepage;
