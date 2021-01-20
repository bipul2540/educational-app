const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
    minlength: 10,
  },
  content: {
    type: String,
    required: true,
  },

  image: {
    type: Buffer,
    contentType: String,
  },

  data: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
