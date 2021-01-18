import React, { useState } from "react";
import Navbar from "./homepageComponents/Navbar";
import Sidebar from "./homepageComponents/Sidebar";
import PostCard from "./homepageComponents/PostCard";
import RightSidebar from "./homepageComponents/RightSidebar";
import UsersCard from "./homepageComponents/UsersCard";
import "./../style/Homepage.css";
import "./../style/Homepage.css";
import AllCards from "./homepageComponents/AllCards";

function Homepage() {
  const [isActiveBurger, setActiveBurger] = useState(false);
  return (
    <div className="homepage__of__middle">
      <Navbar
        isActiveBurger={isActiveBurger}
        setActiveBurger={setActiveBurger}
      />
      <Sidebar isActiveBurger={isActiveBurger} />
      <PostCard />
      <AllCards />

      <RightSidebar />
    </div>
  );
}

export default Homepage;
