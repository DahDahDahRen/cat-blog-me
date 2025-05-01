const Joi = require("joi");

const userSchema = Joi.object({
  fullname: Joi.string().required().messages({
    "string.empty": "Fullname is required.",
  }),
  email: Joi.string().required().messages({
    "string.empty": "Email is required.",
  }),
  password: Joi.string().required().min(6).max(16).messages({
    "string.empty": "Password is required.",
    "string.min": "Password must be 6 characters.",
    "string.max": "Password must be 16 characters.",
  }),
});

module.exports = userSchema;
