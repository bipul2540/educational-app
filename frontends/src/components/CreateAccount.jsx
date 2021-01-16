import React, { useEffect, useState } from "react";
import image1 from "./../images/icon.svg";
import "./../style/CreateAccount.css";
import { Link } from "react-router-dom";
import image from "./../images/image1.svg";
import axios from "./../axios";

function CreateAccount() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState({
    profession: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
  });
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await axios.get("/api/v1/get/data");
    const data = response.data;
    console.log(data);
    setItems(data);
  };

  const postApi = async (text) => {
    const response = await axios.post("/api/v1/post/data", text);
    const data = response.data;
    console.log("data haas been sended to servef", data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(text);
    postApi(text);
  };

  return (
    <div className="createAccount">
      <div className="main__container">
        <div className="left__panel">
          <div className="left__image">
            <img
              src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
              alt=""
            />
          </div>
          <div className="left__content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              vitae nostrum iusto, laboriosam pariatur dolor dolorum. Itaque,
              laboriosam, facilis repudiandae, autem rem et officiis harum
              laborum sint minima ratione ut?
            </p>
            <h2>Bipul kumar</h2>
            <div className="logo">
              <img src={image1} alt="" />
              <h1>TCS group</h1>
            </div>
          </div>
        </div>
        <div className="right__panel">
          <div className="company__name">
            <h1>GroupStudy</h1>
          </div>
          <div className="company__details">
            <h1>Come closer to the world.</h1>
            <p>Get you doubt clear from your mates.</p>
          </div>
          <div className="create__account">
            <form action="#" onSubmit={submitHandler}>
              <input
                name="profession"
                type="text"
                placeholder="Enter your profession"
                value={text.profession}
                onChange={handleChange}
              />
              <input
                name="fname"
                type="text"
                placeholder="First Name"
                value={text.fname}
                onChange={handleChange}
              />
              <input
                name="lname"
                type="text"
                placeholder="Last Name"
                value={text.lname}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={text.email}
                onChange={handleChange}
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                value={text.phone}
                onChange={handleChange}
              />
              <input
                name="password"
                type="password"
                placeholder="Password 8+ character"
                value={text.password}
                onChange={handleChange}
              />
              <button className="signUp__button" type="submit">
                Create Account
              </button>
              <p>
                Already have an account ?
                <span>
                  <Link to="/login">click here</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
        <img className="back__bubble" src={image} alt="" />
      </div>
    </div>
  );
}

export default CreateAccount;
