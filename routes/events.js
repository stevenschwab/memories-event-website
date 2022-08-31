const express = require('express');
const router = express.Router();
const eventController = require('../controllers/events');

router.get('/:id', eventController.getEvent);

router.get('/:id/activities', eventController.getActivities);

router.get('/:id/journal', eventController.getJournal);

router.get('/:id/media', eventController.getMedia);

router.get('/:id/qAndA', eventController.getQAndA);

router.get('/:id/schedule', eventController.getSchedule);

router.get('/:id/travelAndLodging', eventController.getTravelAndLodging);

module.exports = router;