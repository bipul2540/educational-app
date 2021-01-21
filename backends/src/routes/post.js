const router = require("express").Router();
const Post = require("./../models/Posts");
const multer = require("multer");

// creating a localstorage for image storing

const DIR = "./public/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },

  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, "hdfidfdkckj4454322oo" + "-" + fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

router.post("/user/posts", upload.single("image"), async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  console.log(req.body);

  try {
    if (req.file) {
      const post = new Post({
        username: req.body.username,
        email: req.body.email,
        title: req.body.title,
        content: req.body.content,
        image: url + "/public/" + req.file.filename,
        date: req.body.date,
      });
      await post.save();
      res.status(201).send(post);
    } else {
      const post = new Post({
        username: req.body.username,
        email: req.body.email,
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
      });
      await post.save();
      res.status(201).send(post);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/user/posts/get", async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ _id: -1 })
      .select({ username: 1, image: 1, title: 1, content: 1, date: 1 });
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
