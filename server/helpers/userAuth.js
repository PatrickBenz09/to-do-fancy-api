'use strict'

var jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, data) => {
    if(err)
      res.send(err)
    else {
      if(data.role == "admin")
        next();
      else if(data.id == (req.params.id ? req.params.id : req.body.userObjectId))
        next();
      else
        res.status(400).send("You're Unauthorized!");
    }
  })
};
