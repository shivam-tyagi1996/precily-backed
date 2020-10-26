const Joi = require('joi');

const createValidator = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().min(1).required(),
  gender: Joi.string().valid('Male', 'Female').required(),
  address: Joi.string().required()
});

const updateValidator = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().min(3),
  age: Joi.number().min(1),
  gender: Joi.string().valid('Male', 'Female'),
  address: Joi.string()
});

module.exports = { createValidator, updateValidator };
