const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("./routes/auth");
const messageRouter = require("./routes/message");
const postRouter = require("./routes/post");

const io = require("socket.io")(3100);

// MODEL REQUIRE
const Message = require("./models/Messages");

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

// SOCKET PROGRAMMING
// io.on("connection", (socket) => {
//   Message.find()
//     .sort({ cretedAt: -1 })
//     .exec((err, message) => {
//       if (err) return console.log(err);
//     });
// });

// socket

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
