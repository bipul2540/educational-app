const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sendermsg: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Messages", messageSchema);
