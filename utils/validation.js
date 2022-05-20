const joi = require("joi");

const registerSchema = joi.object({
  firstName: joi.string().min(2).max(15).required(),
  lastName: joi.string().min(2).max(15).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
