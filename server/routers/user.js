'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const middlewareAuth = require('../helpers/userAuth');
const middlewareAuthAdmin = require('../helpers/userAuthAdmin');

router.get('/', middlewareAuthAdmin, userController.findAll);
router.get('/:id', middlewareAuth, userController.findOne);
router.delete('/:id', middlewareAuth, userController.deleteOne);
router.put('/:id', middlewareAuth, userController.updateOne);
router.post('/', middlewareAuth, userController.assignTodo);

module.exports = router;
