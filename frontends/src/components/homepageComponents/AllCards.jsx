import React, { useEffect, useState } from "react";
import "./../../style/AllCards.css";
import PostCard from "./PostCard";
import UsersCard from "./UsersCard";
import axios from "./../../axios";
import { IconButton } from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function AllCards({ isfullpagepost, setFullPagePost }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/v1/user/posts/get");
      const data = response.data;
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (posts.length > 0) {
    return (
      <div className="all__cards">
        <div className="all__cards__container">
          <PostCard
            isfullpagepost={isfullpagepost}
            setFullPagePost={setFullPagePost}
          />

          {posts.map((post) => {
            return (
              <UsersCard
                key={post._id}
                username={post.username}
                title={post.title}
                content={post.content}
                image={post.image}
              />
            );
          })}
          <p className="movetoTop">
            <IconButton className="movetop__button">
              <ArrowDropUpIcon />
            </IconButton>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="all__cards">
        <div className="all__cards__container">
          <img
            src="https://i.gifer.com/4V0b.gif"
            alt=""
            className="loading__gif"
          />
        </div>
      </div>
    );
  }
}

export default AllCards;
