const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema({
  profession: {
    type: String,
  },
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        console.log("Email is invalid");
      }
    },
  },
  number: {
    type: Number,
  },
  password: {
    type: String,
  },
});

const userData = mongoose.model("userDatabase", UserSchema);

module.exports = userData;
