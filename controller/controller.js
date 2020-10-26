const repository = require('../repository/repository');

// Function is used to get the list of user with details
const getUsers = async (req, res) => {
  try {
    console.time('getUsers');
    const result = await repository.getUsers();

    res.send(result);
    console.timeEnd('getUsers');
  } catch (err) {
    res.status(400).send(err);
  }
}

// Funciton is used to create a new user.
const createUser = async (req, res) => {
  try {
    console.time('createUser');
    const result = await repository.createUser(req.body);

    res.send(result);
    console.timeEnd('createUser');
  } catch (err) {
    res.status(400).send(err);
  }
}

// Function is used to update the existing user.
const updateUser = async (req, res) => {
  try {
    // console.time('updateUser');
    console.log('req.body', req.body)
    const result = await repository.updateUser(req.body);

    res.send(result);
    console.timeEnd('updateUser');
  } catch (err) {
    res.status(400).send(err);
  }
}

// Funciton is used to get the total count of user created and user edited.
const count = async (req, res) => {
  try {
    // console.time('count');
    const result = await repository.count();

    res.send(result);
    // console.timeEnd('count');
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = { getUsers, createUser, updateUser, count };
