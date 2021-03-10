const express = require("express");

const router = express.Router();

const Post = require("../models/Post");
router.get("/", (req, res) => {
  res.send("We are in posts ");
});

router.post("/", (req, res) => {
  console.log(req.Body);
});

module.exports = router;
