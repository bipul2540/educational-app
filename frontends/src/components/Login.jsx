import React, { useEffect, useState } from "react";
import "./../style/Login.css";
import { Link, Redirect } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import image1 from "./../images/image1.svg";
import image7 from "./../images/image7.jpg";
import image8 from "./../images/image8.jpg";
import image9 from "./../images/image9.jpg";
import image10 from "./../images/image10.jpg";
import image11 from "./../images/image11.jpg";
import image12 from "./../images/image12.jpg";
import axios from "./../axios";

function Login({ authenticated, setAuthenticated }) {
  const [text, setText] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // fetchApi();
    storeCollector();
  }, []);
  const storeCollector = () => {
    const store = JSON.parse(localStorage.getItem("login"));
    if (store && store.authenticated && store.token) {
      setAuthenticated(store.authenticated);
    }
  };
  const fetchApi = async (text) => {
    try {
      const response = await axios.post("/api/v1/new/user/login", text);
      const result = await response.data;
      console.log(result);
      if (!result) {
        setAuthenticated(false);
      }

      localStorage.setItem(
        "login",
        JSON.stringify({
          token: result.token,
          authenticated: true,
        })
      );
      storeCollector();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`/api/v1/new/user/get/${text.email}`);
      const userdata = response.data;
      console.log("userdata is", userdata);
      localStorage.setItem(
        "userdata",
        JSON.stringify({
          fname: userdata.fname,
          lname: userdata.lname,
          profession: userdata.profession,
          email: userdata.email,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    fetchApi(text);
    fetchUserData();
    setText({
      email: "",
      password: "",
    });
  };

  if (authenticated === false) {
    return (
      <div className="login">
        <div className="main__container">
          <img src={image1} className="bubble__image" alt="" />
          <div className="left__panel__login">
            <h1>welcome....</h1>
            <p>
              I am glad that you came, your time is precious for us, meet with
              your mates.
            </p>
            <div className="image">
              <img src={image7} className="circle__img one" alt="" />
              <img src={image8} className="circle__img two" alt="" />
              <img src={image9} className="circle__img three" alt="" />
              <img src={image10} className="circle__img four" alt="" />
              <img src={image11} className="circle__img five" alt="" />
              <img src={image12} className="circle__img six" alt="" />
            </div>
            <Link to="/createaccount">
              <button className="createAccount">signup</button>
            </Link>
          </div>
          <div className="right__panel__login">
            <h3>
              Login to <span>StudyGroup</span>{" "}
            </h3>
            <div className="form__container">
              <form onSubmit={loginHandler}>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={text.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="enter your password"
                  name="password"
                  value={text.password}
                  onChange={handleChange}
                />
                <button className="form__btn" type="submit">
                  sign in
                </button>
              </form>
            </div>

            <div className="signin__option">
              <GitHubIcon className="signin__icon" />
              <FacebookIcon className="signin__icon" />
              <LinkedInIcon className="signin__icon" />
              <TwitterIcon className="signin__icon" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/website" />;
  }
}

export default Login;
