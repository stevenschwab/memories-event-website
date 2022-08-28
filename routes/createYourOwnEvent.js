const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer")
const createYourOwnEventController = require('../controllers/createYourOwnEvent')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, createYourOwnEventController.getIndex) //sees the route and tells the home controller to run

router.get('/viewEvent', createYourOwnEventController.viewEvent)

router.post('/createEvent', upload.single("file"), createYourOwnEventController.createEvent)

router.put('/editEvent/:id', ensureAuth, createYourOwnEventController.editEvent)

router.delete('/deleteEvent/:id', ensureAuth, createYourOwnEventController.deleteEvent)

module.exports = router