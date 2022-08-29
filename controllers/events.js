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
            const activities = await Activities.findById(req.params.id);
            res.render('activities.ejs', {
                activities: activities, 
                user: req.user
            });
        } catch(err) {
            console.log(err);
        }
    },
    getJournal: async (req, res) => {
        try {
            const journalEntries = await JournalEntries.findById(req.params.id);
            res.render('journal.ejs', {
                journalEntries: journalEntries, 
                user: req.user
            });
        } catch(err) {
            console.log(err);
        }
    },
    getMedia: async (req, res) => {
        try {
            const media = await Media.findById(req.params.id);
            res.render('media.ejs', {
                media: media, 
                user: req.user
            });
        } catch(err) {
            console.log(err);
        }
    },
    getQAndA: async (req, res) => {
        try {
            const questionsAndAnswers = await qAndA.findById(req.params.id);
            res.render('q&a.ejs', {
                questionsAndAnswers: questionsAndAnswers, 
                user: req.user
            });
        } catch(err) {
            console.log(err);
        }
    },
    getSchedule: async (req, res) => {
        try {
            const schedule = await Schedule.findById(req.params.id);
            res.render('schedule.ejs', {
                schedule: schedule, 
                user: req.user
            });
        } catch(err) {
            console.log(err);
        }
    },
    getTravelAndLodging: async (req, res) => {
        try {
            const travelAndLodging = await TravelAndLodging.findById(req.params.id);
            res.render('travel&lodging.ejs', {
                travelAndLodging: travelAndLodging, 
                user: req.user
            });
        } catch(err) {
            console.log(err);
        }
    }
}