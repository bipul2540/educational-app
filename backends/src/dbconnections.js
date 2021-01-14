const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/education-app", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database is connected successfully...");
  })
  .catch((error) => {
    console.log("you have error in connecting database", error);
  });
