const AppError = require("../utils/AppError");

// Error handler
const errorHandler = (err, req, res, next) => {
  console.log(err);

  // Check err object
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
      statusCode: err.statusCode,
      success: err.success,
    });
  }

  // Default response to error
  res.status(505).json({ message: err, statusCode: 505, success: false });
};

module.exports = errorHandler;
