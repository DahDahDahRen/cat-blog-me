const postSchema = require("../validation/postSchema");

const validatePost = (req, res, next) => {
  // Validate and get error
  const { error } = postSchema.validate(req.body, { abortEarly: false });

  // Check if there is an error
  if (error) {
    return res.status(404).json({
      message: error.details.map((err) => err.message),
      statusCode: 404,
      success: false,
    });
  }

  next();
};

module.exports = validatePost;
