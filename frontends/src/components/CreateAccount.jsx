import React, { useEffect, useState } from "react";
import image1 from "./../images/icon.svg";
import "./../style/CreateAccount.css";
import { Link } from "react-router-dom";
import image from "./../images/image1.svg";
import axios from "./../axios";
import Greet from "./Greet";
import createValidations from "./validations";

function CreateAccount() {
  const [account, setAccont] = useState(false);
  const [errors, setErrors] = useState({});
  const [text, setText] = useState({
    profession: "",
    fname: "",
    lname: "",
    email: "",
    number: "",
    password: "",
  });
  useEffect(() => {}, []);

  const postApi = async (text) => {
    try {
      const response = await axios.post("/api/v1/new/register", text);
      if (response) setAccont(!account);
      const data = response.data;
      console.log("data haas been sended to server", data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const validations = createValidations(text);
    console.log(validations.errors.fname);
    if (
      validations.errors.fname ||
      validations.errors.lname ||
      validations.errors.profession ||
      validations.errors.number ||
      validations.errors.email ||
      validations.errors.password
    )
      return setErrors(validations.errors);

    postApi(text);
    setText({
      profession: "",
      email: "",
      lname: "",
      fname: "",
      number: "",
      password: "",
    });
  };
  console.log("you account data", account);

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
              {errors.profession ? (
                <p className="error__field">{errors.profession}</p>
              ) : (
                " "
              )}
              <input
                name="profession"
                type="text"
                placeholder="Enter your profession"
                value={text.profession}
                onChange={handleChange}
              />
              {errors.fname ? (
                <p className="error__field">{errors.fname}</p>
              ) : (
                " "
              )}

              <input
                name="fname"
                type="text"
                placeholder="First Name"
                value={text.fname}
                onChange={handleChange}
              />

              {errors.lname ? (
                <p className="error__field">{errors.lname}</p>
              ) : (
                " "
              )}
              <input
                name="lname"
                type="text"
                placeholder="Last Name"
                value={text.lname}
                onChange={handleChange}
              />

              {errors.email ? (
                <p className="error__field">{errors.email}</p>
              ) : (
                " "
              )}
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={text.email}
                onChange={handleChange}
              />

              {errors.number ? (
                <p className="error__field">{errors.number}</p>
              ) : (
                " "
              )}
              <input
                name="number"
                type="text"
                placeholder="Phone Number"
                value={text.number}
                onChange={handleChange}
              />

              {errors.password ? (
                <p className="error__field">{errors.password}</p>
              ) : (
                " "
              )}
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
      {account ? <Greet /> : ""}
    </div>
  );
}

export default CreateAccount;
