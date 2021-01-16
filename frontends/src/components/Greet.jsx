import React from "react";
import { Link } from "react-router-dom";
import "./../style/Greet.css";

function Greet() {
  return (
    <div className="greeting">
      <div className="greeting__container">
        <div className="greet__card">
          <h1>welcome user, your account has been created  </h1>
          <button className="redirect__login__page">
            <Link to="/login">Go to Login page</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Greet;
