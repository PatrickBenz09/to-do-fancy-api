'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: {
    type: String,
    required: [true, "ToDo notes can't be blank"]
  },
  done: {
    type: Boolean,
    default: false
  },
  due_date: Date,
},
{ timestamps: true })

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
