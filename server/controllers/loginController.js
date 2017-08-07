'use strict'

const model = require('../models/User');
var jwt = require('jsonwebtoken');
require('dotenv').config()

let login = (req, res) => {
  model.findOne({ username: req.body.username })
  .then(result => {
    if(result.password == req.body.password) {
      const token = jwt.sign({
        id: result._id,
        username: result.username,
        role: result.role
      }, process.env.SECRET);
      req.headers.token = token;
      //console.log(req.headers);
      let data = {
        token: token,
        exist: true,
        id: result._id
      }
      res.send(data);
    } else {
      res.send('Wrong Password!');
    }
  })
  .catch(err => res.send(err + '  /  User not found!'))
}

module.exports = {
  login
};
