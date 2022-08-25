const express = require('express')
const router = express.Router()
const qAndAController = require('../controllers/q&a')

router.get('/', qAndAController.getIndex) //sees the route and tells the home controller to run

module.exports = router