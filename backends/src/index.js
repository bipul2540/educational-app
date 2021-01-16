const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

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

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
