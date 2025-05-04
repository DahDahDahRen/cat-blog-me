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

router.patch("/:id", protectedRoute, validatePost, updatePost);

router.delete("/:id", protectedRoute, deletePost);

module.exports = router;
