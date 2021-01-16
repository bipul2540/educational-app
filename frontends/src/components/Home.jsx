import React from "react";
import { Link } from "react-router-dom";
import "./../style/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__header">
          <h1>GroupStudy</h1>
          <nav>
            <ul className="nav__links">
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="home__main">
          <h1 className="home__head">our work</h1>
          <div className="main__content">
            <div className="cards">
              <div className="card">
                <h1>web designer</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorem laboriosam officiis ad numquam non inventore
                  recusandae animi, dolores labore asperiores eligendi ab unde,
                  veniam fuga est libero. Aut, commodi assumenda!
                </p>
              </div>
              <div className="card">
                <h1>content writer</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorem laboriosam officiis ad numquam non inventore
                  recusandae animi, dolores labore asperiores eligendi ab unde,
                  veniam fuga est libero. Aut, commodi assumenda!
                </p>
              </div>
              <div className="card">
                <h1>digital marketing</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorem laboriosam officiis ad numquam non inventore
                  recusandae animi, dolores labore asperiores eligendi ab unde,
                  veniam fuga est libero. Aut, commodi assumenda!
                </p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="signup">
              <Link to="/createaccount">sign up</Link>
            </button>
            <button className="signin">
              <Link to="/login">sign in</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
