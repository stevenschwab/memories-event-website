const express = require('express')
const router = express.Router()
const activitiesController = require('../controllers/activities')

router.get('/', activitiesController.getIndex) //sees the route and tells the home controller to run

module.exports = router