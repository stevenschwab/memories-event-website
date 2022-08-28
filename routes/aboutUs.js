const express = require('express');
const router = express.Router();
const aboutUsController = require('../controllers/aboutUs');

router.get('/', aboutUsController.getAboutUsPage);

module.exports = router;