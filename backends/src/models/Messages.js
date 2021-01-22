const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sendermsg: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  sender: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Messages", messageSchema);
