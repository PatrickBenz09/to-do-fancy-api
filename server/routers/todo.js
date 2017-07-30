'use strict'

const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const middlewareAuthUsersPost = require('../helpers/userAuthUsersPost');
const middlewareAuthUserOrAdmin = require('../helpers/userAuthUserOrAdmin');
const middlewareAuthAdmin = require('../helpers/userAuthAdmin');

router.get('/', middlewareAuthAdmin, todoController.findAll);
router.get('/:id', middlewareAuthUsersPost, todoController.findOne);
router.post('/', middlewareAuthUserOrAdmin, todoController.createOne);
router.delete('/:id', middlewareAuthUsersPost, todoController.deleteOne);
router.put('/:id', middlewareAuthUsersPost, todoController.updateOne);

module.exports = router;
