import React from "react";
import "./../../style/ChatSideUser.css";

function ChatSideUser() {
  return (
    <div className="chatsidebarUser">
      <div className="chat__user__container">
        <img
          src="https://deadline.com/wp-content/uploads/2018/02/bill-gates-2.jpg?w=792"
          alt=""
          className="friends__logo"
        />
        <div className="sidebar__chatinfo">
          <h2>Room name</h2>
          <p> last message....</p>
        </div>
      </div>
    </div>
  );
}

export default ChatSideUser;
