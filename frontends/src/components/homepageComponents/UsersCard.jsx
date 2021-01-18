import { Avatar } from "@material-ui/core";
import React from "react";
import "./../../style/UsersCard.css";
import RateReviewIcon from "@material-ui/icons/RateReview";

function UsersCard() {
  return (
    <div className="userscard">
      <div className="card__container">
        <div className="persons__logo__header">
          <Avatar />
          <p>
            <strong>Rahul kumar</strong>
            <span> category: javascript, reactjs</span>
          </p>
        </div>
        <div className="card__question__data">
          <div className="question">
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              fuga.?
            </h5>
          </div>
          <div className="question_explanation">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis eligendi velit repellendus voluptates ullam alias
              minus, harum laboriosam. Mollitia nesciunt distinctio laudantium
              iure enim rerum harum facere explicabo, animi suscipit.
            </p>
          </div>
        </div>
        <div className="card__buttons">
          <button>
            <i class="fas fa-comment"></i>
            Answer
          </button>
          <button>
            <RateReviewIcon className="rate" />
            review
          </button>
          <button>
            <i class="fas fa-share"></i>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsersCard;
