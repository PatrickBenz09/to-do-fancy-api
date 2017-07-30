'use strict'

const model = require('../models/User');

let findAll = (req, res) => {
  model.find({})
  .populate('todoList')
  .then(result => res.send(result))
  .catch(err => res.send(err));
}

let findOne = (req, res) => {
  model.findOne({ _id: req.params.id })
  .populate('todoList')
  .then(result => res.send(result))
  .catch(err => res.send(err));
}

let deleteOne = (req, res) => {
  model.deleteOne({ _id: req.params.id })
  .then(() => res.send('Successfully Deleted!'))
  .catch(err => res.send(err + ' hiksssss'));
}

let updateOne = (req, res) => {
  model.updateOne({
    // where
    _id: req.params.id
  }, {
    //update ($set to set new value, $unset to remove a field, $rename to rename a field)
    $set: {
      username: req.body.username,
      email: req.body.email
    }
  })
  .then(() => res.send('Successfully Updated!'))
  .catch(err => res.send(err));;
}

let assignTodo = (req, res) => {
  model.updateOne({ _id: req.body.userObjectId },
  { $push: { todoList: req.body.todouserObjectId } })
  .then(() => res.send('Successfully Assigned a Todo!'))
  .catch(err => res.send(err));;
}

module.exports = {
  findAll,
  findOne,
  deleteOne,
  updateOne,
  assignTodo
};
