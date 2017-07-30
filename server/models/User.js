'use strict'

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username can't be blank!"]
  },
  password: {
    type: String,
    required: [true, "Password can't be blank!"]
  },
  email: {
    type: String,
    required: [true, "Email can't be blank!"]
  },
  role: {
    type: String,
    required: [true, "Role can't be empty!"],
    default: "user"
  },
  todoList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }],
},
{ timestamps: true })

const User = mongoose.model('User', userSchema);

module.exports = User;
