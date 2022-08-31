const Event = require('../models/Event')

module.exports = {
    getProfile: async (req, res) => {
        try {
          const posts = await Event.find({ user: req.user.id });
          res.render("profile.ejs", { user: req.user });
        } catch (err) {
          console.log(err);
        }
    },
    getEvent: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('eventPage.ejs', {
                event: event, 
                user: req.user
            });
        } catch(err) {
            console.log(err);
        }
    },
    getActivities: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('activities.ejs', {
                event: event,
                activities: event.activities
            });
        } catch(err) {
            console.log(err);
        }
    },
    getJournal: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('journal.ejs', {
                event: event,
                journalEntries: event.journalEntries
            });
        } catch(err) {
            console.log(err);
        }
    },
    getMedia: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('media.ejs', {
                event: event,
                media: event.media,
            });
        } catch(err) {
            console.log(err);
        }
    },
    getQAndA: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('q&a.ejs', {
                event: event,
                questionsAndAnswers: event.questionsAndAnswers
            });
        } catch(err) {
            console.log(err);
        }
    },
    getSchedule: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('schedule.ejs', {
                event: event,
                schedule: event.schedule
            });
        } catch(err) {
            console.log(err);
        }
    },
    getTravelAndLodging: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('travel&lodging.ejs', {
                event: event,
                travelAndLodging: event.travelAndLodging
            });
        } catch(err) {
            console.log(err);
        }
    }
}