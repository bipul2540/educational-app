const router = require("express").Router();
const User = require("./../models/User");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("./validations");

router.post("/register", async (req, res) => {
  const data = req.body;
  const validations = registerValidation(data);

  if (validations.error)
    return res.status(400).send(validations.error.details[0].message);

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

router.get("/users/get", async (req, res) => {
  try {
    const user = await User.find().select({ fname: 1 });
    res.status(400).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// LOGIN
router.post("/user/login", async (req, res) => {
  const data = req.body;
  const validations = loginValidation(data);
  if (validations.error)
    return res.status(400).send(validations.error.details[0].message);

  const user = await User.findOne({ email: data.email });
  if (!user) return res.status(200).send("user is not register");
  const passValid = await bcrypt.compare(data.password, user.password);
  if (passValid) {
    return res.status(200).send("Access granted you can Enter our website");
  } else {
    return res.status(500).send("password does not match");
  }
});

module.exports = router;
