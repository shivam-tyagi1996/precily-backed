const { Router } = require('express');

const validationHandler = require('../helper/validationHandler');
const { getUsers, createUser, updateUser, count } = require('./controller');
const { createValidator, updateValidator } = require('./vaidator');

const router = Router();

router.route('/')
  .get(getUsers)
  .post(validationHandler(createValidator), createUser)
  .put(validationHandler(updateValidator), updateUser);

router.route('/count')
  .get(count)

module.exports = router;
