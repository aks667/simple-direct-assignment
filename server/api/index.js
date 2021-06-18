const express = require('express');
const router = express.Router();

router.use('/postings', require('./postings'));

module.exports = router;
