const userSchema = require("../validation/userSchema");

const validateRegister = (req, res, next) => {
  // Validate the form
  const { error } = userSchema.validate(req.body, { abortEarly: false });

  // Check if there is an error
  if (error) {
    return res.status(404).json({
      messages: error.details.map((err) => err.message),
      statusCode: 404,
      success: false,
    });
  }

  // Go to route handler
  next();
};

module.exports = validateRegister;
