'use strict'

const model = require('../models/Todo');

let findAll = (req, res) => {
  model.find({})
  .then(result => res.send(result))
  .catch(err => res.send(err));
}

let findOne = (req, res) => {
  model.findOne({ _id: req.params.id })
  .then(result => res.send(result))
  .catch(err => res.send(err));
}

let createOne = (req, res) => {
  model.create({
    todo: req.body.todo,
    due_date: req.body.due_date
  })
  .then(() => res.send('Successfully Created!'))
  .catch(err => res.send(err));
}

let deleteOne = (req, res) => {
  model.deleteOne({ _id: req.params.id })
  .then(result => res.send('Successfully Deleted!'))
  .catch(err => res.send(err));
}

let updateOne = (req, res) => {
  model.updateOne({
    // Where
    _id: req.params.id
  }, {
    // Update ($set to set new value, $unset to remove a field, $rename to rename a field)
    $set: { todo: req.body.todo }
  })
  .then(result => res.send('Successfully Updated!'))
  .catch(err => res.send(err));
}

module.exports = {
  findAll,
  findOne,
  createOne,
  deleteOne,
  updateOne
};
