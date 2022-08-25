const express = require('express')
const router = express.Router()
const travelAndLodgingController = require('../controllers/travel&Lodging')

router.get('/', travelAndLodgingController.getIndex) //sees the route and tells the home controller to run

module.exports = router