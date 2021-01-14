import React from "react";
import image1 from "./../images/power.png";
import "./../style/CreateAccount.css";

function CreateAccount() {
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
            <form action="#">
              <input type="text" placeholder="Enter your professin" />
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="E-main Address" />
              <input type="text" placeholder="Phone Number" />
              <input type="password" placeholder="Password 8+ character" />
              <button type="submit">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
