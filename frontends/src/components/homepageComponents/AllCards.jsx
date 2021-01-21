import React, { useEffect, useState } from "react";
import "./../../style/AllCards.css";
import PostCard from "./PostCard";
import UsersCard from "./UsersCard";
import axios from "./../../axios";

function AllCards({ isfullpagepost, setFullPagePost }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
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
      </div>
    </div>
  );
}

export default AllCards;
