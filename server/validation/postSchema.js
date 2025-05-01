const Joi = require("joi");

const postSchema = Joi.object({
  body: Joi.string().required().messages({
    "string.empty": "This post needs a body text.",
  }),
});

module.exports = postSchema;
