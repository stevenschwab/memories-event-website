const express = require('express')
const router = express.Router()
const inspirationController = require('../controllers/inspiration')

router.get('/', inspirationController.getIndex) //sees the route and tells the home controller to run

module.exports = router