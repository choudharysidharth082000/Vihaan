const express = require('express');
const router = express.Router();
const test = require('../Controllers/Auth');

//test api
router.get('/testAuth', test.testAuth);


module.exports = router;