const Collection = require('./Model');

const getUsers = () => {
  return Collection.find({ deleted: false });
};

const createUser = (query) => {
  return Collection.create(query);
};

const updateUser = async (query) => {
  const oldUser = await Collection.findOne({ _id: query._id, deleted: false });
  console.log(query);
  const { _id, ...rest } = JSON.parse(JSON.stringify(oldUser));
  // Update the existing user to mark as deleted
  await Collection.updateOne({ _id: query._id }, { deleted: true });
  delete query._id;

  // Creating a new user by using existing user details
  const newUser = { ...rest, ...query };

  return Collection.create(newUser);
};

const count = async () => {
  const created = await Collection.countDocuments({ deleted: false });
  const updated = await Collection.countDocuments({ deleted: true });

  return { created, updated };
};

module.exports = { getUsers, createUser, updateUser, count };
