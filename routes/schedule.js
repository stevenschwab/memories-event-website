const express = require('express')
const router = express.Router()
const scheduleController = require('../controllers/schedule')

router.get('/', scheduleController.getIndex) //sees the route and tells the home controller to run

module.exports = router