const socket_io = require("socket.io");
const io = socket_io();
const Message = require("./models/Messages");

const changeStream = Message.watch();

changeStream.on("change", (change) => {
  console.log(change);

  io.emit("changeData", change);
});

io.on("connection", () => {
  console.log("connected");
});

const socket = io;
module.exports = socket;
