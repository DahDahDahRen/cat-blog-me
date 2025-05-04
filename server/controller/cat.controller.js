const catchAsync = require("../utils/catchAsync");
const CatPost = require("../model/CatPost");
const User = require("../model/User");
const AppError = require("../utils/AppError");

//! Create a new post
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

//! Get all posts
const getPosts = catchAsync(async (req, res) => {
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

//! Delete post
const deletePost = catchAsync(async (req, res, next) => {
  // Get post id
  const { id } = req.params;

  // Get user
  const user = await User.findById(req.userId.id);

  // Check user
  if (!user) {
    return next(new AppError("Failed to get the account", 404, false));
  }

  // Delete post
  const deletedPost = await CatPost.findByIdAndDelete(id);

  if (!deletedPost) {
    return next(new AppError("Post id does not exist", 404, false));
  }

  // Delete post id in user
  user.posts.filter((post) => {
    if (post._id.toString() !== deletedPost._id) {
      return post;
    }
  });

  // Save the user
  await user.save();

  res.status(202).json({
    message: "Successfully delete the post",
    statusCode: 202,
    success: true,
    deletedPostId: deletedPost.id,
  });
});

//! update post
const updatePost = catchAsync(async (req, res, next) => {
  // Get id
  const { id } = req.params;

  // Get user account
  const user = await User.findById(req.userId.id);

  // Check account
  if (!user) {
    return next(new AppError("Failed to get the account", 404, false));
  }

  // Update the post
  const updatedPost = await CatPost.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  // Check post
  if (!updatedPost) {
    return next(new AppError("Failed to update the account", 404, false));
  }

  // Respond to user
  res.status(202).json({
    message: "Successfylly updated the post",
    statusCode: 202,
    success: true,
    updatePost: updatedPost._id,
  });
});

module.exports = {
  createPost,
  getPosts,
  deletePost,
  updatePost,
};
