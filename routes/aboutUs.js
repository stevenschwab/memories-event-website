const express = require('express')
const router = express.Router()
const aboutUsController = require('../controllers/aboutUs')

router.get('/', aboutUsController.getIndex) //sees the route and tells the home controller to run

module.exports = router