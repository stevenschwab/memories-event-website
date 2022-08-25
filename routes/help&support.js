const express = require('express')
const router = express.Router()
const helpAndSupportController = require('../controllers/help&support')

router.get('/', helpAndSupportController.getIndex) //sees the route and tells the home controller to run

module.exports = router