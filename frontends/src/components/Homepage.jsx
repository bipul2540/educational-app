import React, { useState } from "react";
import Navbar from "./homepageComponents/Navbar";
import "./../style/Homepage.css";
import Sidebar from "./homepageComponents/Sidebar";

function Homepage() {
  const [isActiveBurger, setActiveBurger] = useState(false);
  return (
    <div className="homepage">
      <Navbar
        isActiveBurger={isActiveBurger}
        setActiveBurger={setActiveBurger}
      />
      <Sidebar isActiveBurger={isActiveBurger} />
    </div>
  );
}

export default Homepage;
