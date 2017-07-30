'use strict'

const model = require('../models/User');

let register = (req, res) => {
  // model.findOne({ username: req.body.username })
  // .then(result => {
  //   res.send('Username already exist!')
  // })
  // .catch(() => {
  //   model.create({
  //     username: req.body.username,
  //     password: req.body.password,
  //     email: req.body.email
  //   })
  //   .then(() => res.send('Successfully Created!'))
  //   .catch((err) => res.send('Fail to Create!'));
  // });
  model.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role
  })
  .then(() => res.send('Successfully Created!'))
  .catch((err) => res.send('Fail to Create!'));
}

module.exports = {
  register
};
