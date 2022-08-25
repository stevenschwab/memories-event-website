const express = require('express')
const router = express.Router()
const journalController = require('../controllers/journal')

router.get('/', journalController.getIndex) //sees the route and tells the home controller to run

module.exports = router