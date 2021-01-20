import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import ImageIcon from "@material-ui/icons/Image";
import "./../../style/PostCard.css";
import { Link } from "react-router-dom";
import FullPostCard from "./FullPostCard";

function PostCard({ isfullpagepost, setFullPagePost }) {
  const openFullpagePost = () => {
    setFullPagePost(!isfullpagepost);
  };

  return (
    <div className="postcard">
      <div className="postcard__container">
        <div className="user__card">
          <Avatar
            className="card__user__icon"
            src="https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"
          />
          <input
            type="text"
            placeholder="Enter your question ?"
            onClick={openFullpagePost}
            readOnly="readonly"
          />
        </div>
        <div className="card__options">
          <Link to="#">
            <div className="option__one">
              <CodeIcon className="option__icon" />
              <span>insert Code</span>
            </div>
          </Link>
          <Link to="#">
            <div className="option__two">
              <ImageIcon className="option__icon" />
              <span>insert image</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
