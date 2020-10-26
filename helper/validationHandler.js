// Function is used to check the input is valid or not.
module.exports = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body);
  if (!error) {
    next();
  } else {
    res.status(422).send(error.details);
  }
};
