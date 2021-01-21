import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./../../style/UsersCard.css";
import RateReviewIcon from "@material-ui/icons/RateReview";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function UsersCard({ username, title, content, image }) {
  return (
    <div className="userscard">
      <div className="card__container">
        <div className="persons__logo__header">
          <Avatar />
          <p>
            <strong>{username}</strong>
            <small>5 min</small>
            <span> category: javascript, reactjs</span>
          </p>
        </div>
        <div className="card__question__data">
          <div className="question">
            <h5>{title}</h5>
          </div>
          <div className="question_explanation">
            <p>{content}</p>
          </div>
        </div>
        {image ? (
          <div className="question__image">
            <img src={image} alt="ques" />
          </div>
        ) : (
          ""
        )}
        <div className="card__buttons">
          <button>
            <i className="fas fa-comment"></i>
            Answer
          </button>
          <button>
            <RateReviewIcon className="rate" />
            review
          </button>
          <button>
            <i className="fas fa-share"></i>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsersCard;
