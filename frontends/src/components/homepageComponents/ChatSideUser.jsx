import { Avatar } from "@material-ui/core";
import React from "react";

function ChatSideUser() {
  return (
    <div className="chatsidebarUser">
      <div className="chat__user__container">
        <Avatar />
        <div className="sidebar__chatinfo">
          <h2>Room name</h2>
          <p>this is the last message</p>
        </div>
      </div>
    </div>
  );
}

export default ChatSideUser;
