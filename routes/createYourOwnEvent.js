const express = require('express')
const router = express.Router()
const createYourOwnEventController = require('../controllers/createYourOwnEvent')

router.get('/', createYourOwnEventController.getIndex) //sees the route and tells the home controller to run

module.exports = router