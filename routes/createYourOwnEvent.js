const express = require('express')
const router = express.Router()
const createYourOwnEventController = require('../controllers/createYourOwnEvent')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, createYourOwnEventController.getIndex) //sees the route and tells the home controller to run

router.get('/viewEvent', createYourOwnEventController.viewEvent)

router.post('/createEvent', createYourOwnEventController.createEvent)

router.put('/editEvent', createYourOwnEventController.editEvent)

router.delete('/deleteEvent', createYourOwnEventController.deleteEvent)

module.exports = router