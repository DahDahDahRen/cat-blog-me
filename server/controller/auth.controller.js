const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const User = require("../model/User");
const generateToken = require("../config/token");

//* Register Account controller
const registerAccount = catchAsync(async (req, res, next) => {
  // Get User data
  const { fullname, email, password } = req.body;

  // Check email
  const checkEmail = await User.findOne({ email });

  if (checkEmail) {
    return next(new AppError("Email is already exist!", 404, false));
  }

  // Create user account
  const user = await User.create({ fullname, email, password });

  if (!user) {
    return next(new AppError("Failed to create user account.", 404, false));
  }

  // Create Token
  const token = generateToken(user);

  // Respond to user with token
  res.status(202).json({
    msg: "Successfully created your account",
    token: token,
    statusCode: 202,
    success: true,
  });
});

//* Login Controller
const loginController = catchAsync(async (req, res, next) => {
  // Get user credintials
  const { email, password } = req.body;

  // Check email
  const user = await User.findOne({ email });

  if (!user) {
    return next(new AppError("Email does not exit!", 404, false));
  }

  // Check password
  const result = await user.comparePassword(password);

  if (!result) {
    return next(new AppError("Email or password is invalid.", 404, false));
  }

  // Generate token
  const token = generateToken(user);

  res.status(202).json({
    msg: "You login successfully",
    token: token,
    statusCode: 202,
    success: true,
  });
});

module.exports = { registerAccount, loginController };
