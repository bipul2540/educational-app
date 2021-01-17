import React from "react";
import Navbar from "./homepageComponents/Navbar";
import "./../style/Homepage.css";
import Sidebar from "./homepageComponents/Sidebar";

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default Homepage;
