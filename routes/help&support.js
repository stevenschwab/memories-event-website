const express = require('express');
const router = express.Router();
const helpAndSupportController = require('../controllers/help&support');

router.get('/', helpAndSupportController.getHelpAndSupportPage);

module.exports = router;