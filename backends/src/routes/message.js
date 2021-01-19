const router = require("express").Router();
const Message = require("./../models/Messages");

router.post("/user/sendmsg", async (req, res) => {
  try {
    const msg = req.body;
    const usermsg = new Message(msg);
    const savedmsg = await Message.insertMany([usermsg]);
    res.status(200).send(savedmsg);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/user/message/all", async (req, res) => {
  const allmessage = await Message.find();
  try {
    res.status(200).send(allmessage);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
