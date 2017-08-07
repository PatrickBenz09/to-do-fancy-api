'use strict'

const express = require('express');
const router = express.Router();
const FB = require('fb');

router.get('/', (req, res) => {
  const fbaccesstoken = req.headers.token;
  FB.setAccessToken(fbaccesstoken);
  FB.api('/me', (response) => res.send(response))
})

module.exports = router;
