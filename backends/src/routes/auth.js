const router = require("express").Router();
const User = require("./../models/User");
const bcrypt = require("bcryptjs");
const { registerValidation } = require("./validations");

router.post("/register", async (req, res) => {
  const data = req.body;
  const validations = registerValidation(data);

  if (validations.error)
    return res.status(500).send(validations.error.details[0].message);

  // hashing js
  const salt = await bcrypt.genSalt(10);
  const hasedPass = await bcrypt.hash(req.body.password, salt);

  const user = new User({ ...data, password: hasedPass });

  try {
    await User.insertMany([user]);
    res.status(200).send({ user: user._id });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
