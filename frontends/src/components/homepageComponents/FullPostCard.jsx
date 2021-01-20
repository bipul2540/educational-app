import React from "react";
import "./../../style/FullPostCard.css";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from "@material-ui/icons/Image";

function FullPostCard({ isfullpagepost, setFullPagePost }) {
  const closefullpagepost = () => {
    setFullPagePost(false);
  };

  if (isfullpagepost) {
    return (
      <div className="fullpostcard">
        <div className="fullpost__container">
          <div className="fullpost__heading">
            <h2>create Post</h2>
            <IconButton className="fullpost__close" onClick={closefullpagepost}>
              <CloseIcon />
            </IconButton>
          </div>
          <form action="" className="full__post__form">
            <textarea type="text" placeholder="Enter your questions?" />

            <div className="upload__image__form">
              <label className="upload__image__label" htmlFor="upload">
                <ImageIcon /> <span> insert image</span>
              </label>
              <input id="upload" type="file" />
            </div>

            <button>Post</button>
          </form>
        </div>
      </div>
    );
  } else return "";
}

export default FullPostCard;
