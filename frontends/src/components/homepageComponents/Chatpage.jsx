import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";
import "./../../style/ChatPage.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";
import axios from "./../../axios";
import ChatSideUser from "./ChatSideUser";
import { Link } from "react-router-dom";
import Friends from "./Friends";
import ActiveFriends from "./ActiveFriends";
import Groups from "./Groups";
import { animateScroll } from "react-scroll";

function Chatpage({ ischatpageActive }) {
  const [formValue, setValue] = useState({
    msg: "",
  });

  const [text, setText] = useState("Chats");
  const [messages, setMessage] = useState([]);
  const bottomRef = useRef();

  useEffect(() => {
    getMessages();
  }, [formValue]);
  const fetchMessage = async () => {
    const response = await axios.post("/api/v1/user/sendmsg", {
      sendermsg: formValue.msg,
      sender: true,
    });
    const data = response.data;
    console.log("chat data  is", data);
  };

  const getMessages = async () => {
    const response = await axios.get("/api/v1/user/message/all");
    const data = response.data;
    setMessage(data);
    console.log(messages);
  };

  const sendMsgHandler = (e) => {
    e.preventDefault();
    console.log(formValue);
    fetchMessage();
    getMessages();
    setValue({
      msg: "",
    });
  };

  const valueChangeHandler = (e) => {
    const { name, value } = e.target;
    setValue({ ...formValue, [name]: value });
  };

  const showtext = (e) => {
    console.log(e.target.innerText);
    setText(e.target.innerText);
  };

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [formValue]);

  return (
    <div
      // className="chatpage"
      className={ischatpageActive ? "chatpage chatpage__active" : "chatpage"}
    >
      <div className="chatpage__container">
        {/** THIS IS LEFT PANEL */}
        <div className="chatpage__left__panel">
          <div className="left__panel__header">
            <div className="user__header__imafge">
              <Avatar />
            </div>
          </div>
          <div className="left__panel__option">
            <ul className="left__links" onClick={showtext}>
              <li className="left__link">
                <Link to="#" className="link active">
                  Chats
                </Link>
              </li>
              <li className="left__link">
                <Link to="#">Friends</Link>
              </li>
              <li className="left__link">
                <Link to="#">Active</Link>
              </li>
              <li className="left__link">
                <Link to="#">Groups</Link>
              </li>
            </ul>
          </div>

          {text === "Chats" ? (
            <div className="Friends__box">
              <ChatSideUser />
              <ChatSideUser />
              <ChatSideUser />
            </div>
          ) : (
            ""
          )}
          {text === "Friends" ? (
            <div className="Friends__box">
              <Friends />
            </div>
          ) : (
            ""
          )}

          {text === "Active" ? (
            <div className="Friends__box">
              <ActiveFriends />
            </div>
          ) : (
            ""
          )}
          {text === "Groups" ? (
            <div className="Friends__box">
              <Groups />
            </div>
          ) : (
            ""
          )}
        </div>

        {/** THIS IS RIGHT PANEL */}
        <div className="chatpage__right__panel">
          <div className="chatpage__right__header">
            <div className="user__status__bar">
              <Avatar />
              <div className="user__status">
                <p>
                  <strong>Bipul kumar</strong>
                </p>
                <small>last active...5min ago</small>
              </div>
            </div>
            <div className="userinfo">
              <IconButton className="userinfo__button">
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className="chatbox" id="chatbox" ref={bottomRef}>
            {messages.map((msg) => {
              if (msg.sender === true) {
                return (
                  <p className="message__box message__send" key={msg._id}>
                    {msg.sendermsg}
                    <span>4:45:5 am mon</span>
                  </p>
                );
              } else {
                return (
                  <p className="message__box" key={msg._id}>
                    {msg.sendermsg}
                    <span>4:45:5 am mon</span>
                  </p>
                );
              }
            })}
          </div>

          <div className="chatpage__footer">
            <form onSubmit={sendMsgHandler}>
              <input
                type="text"
                name="msg"
                value={formValue.msg}
                onChange={valueChangeHandler}
              />
              <IconButton onClick={sendMsgHandler}>
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
