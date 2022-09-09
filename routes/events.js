const express = require('express');
const router = express.Router();
const upload = require("../middleware/multer");
const eventController = require('../controllers/events');

router.get('/:id', eventController.getEvent);

router.get('/:id/activities', eventController.getActivities);

router.get('/:id/journal', eventController.getJournal);

router.post('/:id/journal/createJournalPost', eventController.createJournalPost);

router.get('/:id/media', eventController.getMedia);

router.post('/:id/media/addMedia', upload.array("files"), eventController.addMedia);

router.get('/:id/qAndA', eventController.getQAndA);

router.get('/:id/schedule', eventController.getSchedule);

router.get('/:id/travelAndLodging', eventController.getTravelAndLodging);

module.exports = router;