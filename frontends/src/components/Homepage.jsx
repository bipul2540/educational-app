import React, { useState } from "react";
import Navbar from "./homepageComponents/Navbar";
import "./../style/Homepage.css";
import Sidebar from "./homepageComponents/Sidebar";
import PostCard from "./homepageComponents/PostCard";
import RightSidebar from "./homepageComponents/RightSidebar";
import UsersCard from "./homepageComponents/UsersCard";

function Homepage() {
  const [isActiveBurger, setActiveBurger] = useState(false);
  return (
    <div className="homepage">
      <Navbar
        isActiveBurger={isActiveBurger}
        setActiveBurger={setActiveBurger}
      />
      <Sidebar isActiveBurger={isActiveBurger} />
      <PostCard />
      <PostCard />
      <UsersCard />
      <UsersCard />
      <UsersCard />
      <RightSidebar />
    </div>
  );
}

export default Homepage;
