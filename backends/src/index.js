const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("./routes/auth");
const messageRouter = require("./routes/message");
const postRouter = require("./routes/post");

const app = express();
const port = process.env.PORT || 5000;

// DB CONNECTINS
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database is connected successfully...."))
  .catch((error) => console.log(error));

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));

app.use("/api/v1/new", authRouter);
app.use("/api/v1", messageRouter);
app.use("/api/v1", postRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
