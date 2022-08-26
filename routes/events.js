const express = require('express')
const router = express.Router()
const eventController = require('../controllers/events')

router.get('/', eventController.getIndex) //sees the route and tells the home controller to run

module.exports = router