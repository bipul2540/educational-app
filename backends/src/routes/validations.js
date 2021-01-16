const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = new Joi.object({
    profession: Joi.string().min(6).max(100),
    fname: Joi.string().min(2).max(20),
    lname: Joi.string().min(2).max(20),
    email: Joi.string().email().min(8).max(100),
    number: Joi.string()
      .length(10)
      .regex(/^[0-9]+$/),
    password: Joi.string().min(8).max(100),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
