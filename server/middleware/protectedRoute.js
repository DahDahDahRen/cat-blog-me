const jwt = require("jsonwebtoken");

const protectedRoute = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(404).json({
      message: "Token is required.",
      statusCode: 404,
      success: false,
    });
  }

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
    //* Error
    if (err) {
      return res.status(404).json({
        message: "Invalid token or expired token.",
        statusCode: 404,
        success: false,
      });
    }

    //* Append the decoded token
    req.userId = decoded;
    next();
  });
};

module.exports = protectedRoute;
