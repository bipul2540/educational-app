import { Avatar, Button, IconButton } from "@material-ui/core";
import React from "react";
import "./../../style/ChatPage.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";

function Chatpage({ ischatpageActive }) {
  console.log(ischatpageActive);
  return (
    <div
      // className="chatpage"
      className={ischatpageActive ? "chatpage chatpage__active" : "chatpage"}
    >
      <div className="chatpage__container">
        <div className="chatpage__left__panel"></div>
        <div className="chatpage__right__panel">
          <div className="chatpage__right__header">
            <div className="user__status__bar">
              <Avatar />
              <div className="user__status">
                <p>Bipul kumar</p>
                <small>last active...5min ago</small>
              </div>
            </div>
            <div className="userinfo">
              <IconButton className="userinfo__button">
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className="chatbox">
            <div className="chats">
              <div className="sender__chats">
                <p>I am sender</p>
                <p>I am sender</p>
                <p>I am sender</p>
                <p>I am sender</p>
              </div>
              <div className="recever__chats">
                <p>i am receiver</p>
                <p>i am receiver</p>
                <p>i am receiver</p>
              </div>
            </div>
          </div>

          <div className="chatpage__footer">
            <form action="">
              <input type="text" />
              <IconButton>
                <SendIcon />
              </IconButton>
              <i className="fas fa-photo-video"></i>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatpage;
