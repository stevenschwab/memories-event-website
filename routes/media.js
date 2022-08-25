const express = require('express')
const router = express.Router()
const mediaController = require('../controllers/media')

router.get('/', mediaController.getIndex) //sees the route and tells the home controller to run

module.exports = router