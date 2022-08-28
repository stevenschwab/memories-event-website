const express = require('express');
const router = express.Router();
const inspirationController = require('../controllers/inspiration');

router.get('/', inspirationController.getInspirationPage);

module.exports = router;