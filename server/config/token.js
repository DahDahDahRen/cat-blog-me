const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "8h",
  });
};

module.exports = generateToken;
