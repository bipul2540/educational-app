import React, { useEffect, useState } from "react";
import "./../../style/FullPostCard.css";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import axios from "./../../axios";

function FullPostCard({ isfullpagepost, setFullPagePost }) {
  const [postForm, setPostForm] = useState({
    title: "",
    content: "",
  });

  const [fileimage, setFileimage] = useState({
    fileimage: "",
  });

  const closefullpagepost = () => {
    setFullPagePost(false);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPostForm({ ...postForm, [name]: value });
  };

  const handleFileChange = (e) => {
    setFileimage({ ...fileimage, fileimage: e.target.files[0] });
  };

  const localStateValue = JSON.parse(localStorage.getItem("userdata"));

  const fectchData = async () => {
    const formdata = new FormData();

    formdata.append("username", localStateValue.fname);
    formdata.append("email", localStateValue.email);
    formdata.append("title", postForm.title);
    formdata.append("content", postForm.content);
    formdata.append("image", fileimage.fileimage);
    try {
      const response = await axios.post("/api/v1/user/posts", formdata);
      const data = response.data;
      console.log("data is:=", data);
    } catch (error) {
      console.log(error);
    }
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    console.log(postForm);
    console.log(fileimage);
    console.log(localStateValue);
    fectchData();
    setPostForm({
      title: "",
      content: "",
    });
    setFileimage({ image: "" });
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
          <form
            action=""
            className="full__post__form"
            encType="multipart/form-data"
            onSubmit={FormSubmitHandler}
          >
            <input
              type="text"
              placeholder="Enter the title?"
              name="title"
              value={postForm.title}
              onChange={changeHandler}
            />
            <textarea
              type="text"
              placeholder="Enter your questions?"
              name="content"
              value={postForm.content}
              onChange={changeHandler}
            />

            <div className="upload__image__form">
              <input id="upload" type="file" onChange={handleFileChange} />
            </div>

            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  } else return "";
}

export default FullPostCard;
