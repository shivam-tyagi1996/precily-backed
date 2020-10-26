const { Schema, model } = require('mongoose');

// Schema is created to set the parametes validation by ORM
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// Collection class is created for the CRUD operations
module.exports = model('user', userSchema, 'user');
