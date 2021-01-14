const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userData = require("./UserSchema");
const { response } = require("express");
require("./dbconnections");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.post("/api/v1/post/data", async (req, res) => {
  try {
    const data = req.body;
    const postdata = await userData.insertMany([data]);
    res.status(200).send(postdata);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/v1/get/data", async (req, res) => {
  try {
    const data = await userData.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
