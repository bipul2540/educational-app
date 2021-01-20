import React, { useEffect, useState } from "react";
import Navbar from "./homepageComponents/Navbar";
import Sidebar from "./homepageComponents/Sidebar";
import PostCard from "./homepageComponents/PostCard";
import RightSidebar from "./homepageComponents/RightSidebar";
import "./../style/Homepage.css";
import "./../style/Homepage.css";
import AllCards from "./homepageComponents/AllCards";
import Chatpage from "./homepageComponents/Chatpage";
import SettingPage from "./homepageComponents/SettingPage";
import FullPostCard from "./homepageComponents/FullPostCard";

function Homepage() {
  const [isActiveBurger, setActiveBurger] = useState(false);
  const [ischatpageActive, setChatpageActive] = useState(false);
  const [issettinpageActive, setSettingpageActive] = useState(false);
  const [person, setPerson] = useState([]);
  const [isfullpagepost, setFullPagePost] = useState(false);

  useEffect(() => {}, []);

  const userdata = JSON.parse(localStorage.getItem("userdata"));
  console.log("ths is home page", userdata.fname);

  const removePopup = () => {
    setSettingpageActive(false);
  };

  return (
    <div className="homepage__of__middle">
      <Navbar
        isActiveBurger={isActiveBurger}
        setActiveBurger={setActiveBurger}
        ischatpageActive={ischatpageActive}
        setChatpageActive={setChatpageActive}
        issettinpageActive={issettinpageActive}
        setSettingpageActive={setSettingpageActive}
      />
      <Sidebar isActiveBurger={isActiveBurger} userdata={userdata} />
      <AllCards
        onClick={removePopup}
        isfullpagepost={isfullpagepost}
        setFullPagePost={setFullPagePost}
      />
      <FullPostCard
        isfullpagepost={isfullpagepost}
        setFullPagePost={setFullPagePost}
      />
      <RightSidebar />
      <Chatpage ischatpageActive={ischatpageActive} />
      <SettingPage issettinpageActive={issettinpageActive} />
    </div>
  );
}

export default Homepage;
