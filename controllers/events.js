const Event = require('../models/Event')

module.exports = {
    getEvent: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('eventPage.ejs', {
                event: event, 
                user: req.user
            });
        } catch(err) {
            console.log(err)
        }
    },
    getActivities: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('activities.ejs', {
                event: event, 
                user: req.user
            });
        } catch(err) {
            console.log(err)
        }
    },
    getJournal: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('journal.ejs', {
                event: event, 
                user: req.user
            });
        } catch(err) {
            console.log(err)
        }
    },
    getMedia: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('media.ejs', {
                event: event, 
                user: req.user
            });
        } catch(err) {
            console.log(err)
        }
    },
    getQAndA: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('q&a.ejs', {
                event: event, 
                user: req.user
            });
        } catch(err) {
            console.log(err)
        }
    },
    getSchedule: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('schedule.ejs', {
                event: event, 
                user: req.user
            });
        } catch(err) {
            console.log(err)
        }
    },
    getTravelAndLodging: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.render('travel&lodging.ejs', {
                event: event, 
                user: req.user
            });
        } catch(err) {
            console.log(err)
        }
    }
}