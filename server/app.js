'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Mongoose Connect to Mongo Database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-fancy', err => {
  err ? console.log(err) : console.log('Database Connected!');
});

const index = require('./routers/index');
const login = require('./routers/login');
const register = require('./routers/register');
const user = require('./routers/user');
const todo = require('./routers/todo');
const fblogin = require('./routers/fblogin');

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use(cors())

app.use('/', index);
app.use('/login', login);
app.use('/register', register);
app.use('/user', user);
app.use('/todo', todo);
app.use('/fblogin', fblogin);

app.listen(process.env.PORT || 3000);
