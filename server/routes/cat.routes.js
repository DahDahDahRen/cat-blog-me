const express = require("express");
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controller/cat.controller");
const protectedRoute = require("../middleware/protectedRoute");
const validatePost = require("../middleware/validatePost");
const router = express.Router();

router.get("/", protectedRoute, getPosts);

router.post("/", protectedRoute, validatePost, createPost);

router.patch("/:id", updatePost);

router.delete("/:id", deletePost);

module.exports = router;
