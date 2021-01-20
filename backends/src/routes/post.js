const router = require("express").Router();
const Post = require("./../models/Posts");

router.post("/user/posts", async (req, res) => {
  try {
    const data = req.body;
    const post = new Post(data);
    const savedpost = await Post.insertMany([post]);
    res.status.send(savedpost);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/user/posts/get", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
