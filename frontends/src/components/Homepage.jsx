import React, { useEffect, useState } from "react";
import Navbar from "./homepageComponents/Navbar";
import Sidebar from "./homepageComponents/Sidebar";
import PostCard from "./homepageComponents/PostCard";
import RightSidebar from "./homepageComponents/RightSidebar";
import "./../style/Homepage.css";
import "./../style/Homepage.css";
import AllCards from "./homepageComponents/AllCards";
import Chatpage from "./homepageComponents/Chatpage";

function Homepage() {
  const [isActiveBurger, setActiveBurger] = useState(false);
  const [ischatpageActive, setChatpageActive] = useState(false);
  const [person, setPerson] = useState([]);

  useEffect(() => {}, []);

  const userdata = JSON.parse(localStorage.getItem("userdata"));
  console.log("ths is home page", userdata.fname);

  return (
    <div className="homepage__of__middle">
      <Navbar
        isActiveBurger={isActiveBurger}
        setActiveBurger={setActiveBurger}
        ischatpageActive={ischatpageActive}
        setChatpageActive={setChatpageActive}
      />
      <Sidebar isActiveBurger={isActiveBurger} userdata={userdata} />
      {/**<PostCard /> */}
      <AllCards />

      <RightSidebar />
      {/**<Chatpage ischatpageActive={ischatpageActive} /> */}
      <Chatpage ischatpageActive={ischatpageActive} />
    </div>
  );
}

export default Homepage;
