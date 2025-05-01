const catchAsync = require("../utils/catchAsync");
const CatPost = require("../model/CatPost");
const User = require("../model/User");
const AppError = require("../utils/AppError");

const createPost = catchAsync(async (req, res) => {
  // Get the body and id from token
  const { body } = req.body;

  // Get the user
  const user = await User.findById(req.userId.id);

  if (!user) {
    return next(
      new AppError(
        "Failed to get the account. Please try again later",
        404,
        false
      )
    );
  }

  // Create new post
  const post = await CatPost.create({
    author: req.userId.id,
    body: body,
  });

  // Add post to user
  user.posts.push(post);

  // save the post
  await user.save();

  // check post
  if (!post) {
    return next(new AppError("Failed to create the post", 404, false));
  }

  // populate the posts
  await user.populate({
    path: "posts",
  });

  res.status(202).json({
    message: "Successfully create the post",
    statusCode: 202,
    success: true,
    payload: user.posts,
  });
});

const getPosts = catchAsync(async (req, res) => {
  console.log(req.userId);

  // Get user
  const user = await User.findById(req.userId.id);

  // Check user
  if (!user) {
    return next(new AppError("User does not exit", 404, false));
  }

  // populate
  await user.populate({
    path: "posts",
  });

  res.status(202).json({
    message: "Get all posts",
    statusCode: 202,
    success: true,
    payload: user.posts,
  });
});

const deletePost = catchAsync(async (req, res) => {
  res.status(202).json({ msg: "Delete Post" });
});

const updatePost = catchAsync(async (req, res) => {
  res.status(202).json({ msg: "Update Post" });
});

module.exports = {
  createPost,
  getPosts,
  deletePost,
  updatePost,
};
