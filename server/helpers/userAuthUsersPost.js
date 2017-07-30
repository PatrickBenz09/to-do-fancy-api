'use strict'

var jwt = require('jsonwebtoken');
require('dotenv').config()
const userModel = require('../models/User');

module.exports = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, data) => {
    if(err)
      res.send(err)
    else {
      userModel.findOne({ _id: data.id })
      .then(result => {
        let found = false;
        result.todoList.forEach(todo => {
          if(req.params.id == todo) found = true;
        })
        found == false ? res.status(400).send("It's not your Todo!") : next();
      })
      .catch(err => res.send(err));
    }
  })
};
