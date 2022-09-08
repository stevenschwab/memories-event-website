const Event = require('../models/Event');
const User = require('../models/User');
const JournalPost = require('../models/JournalPost');

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
            const user = await User.findById(event.user);
            res.render('activities.ejs', {
                event: event,
                activities: event.activities,
                user: user
            });
        } catch(err) {
            console.log(err);
        }
    },
    getJournal: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            const user = await User.findById(event.user);
            const journalEntries = await JournalPost.find({ eventId: req.params.id });
            res.render('journal.ejs', {
                event: event,
                journalEntries: journalEntries,
                user: user
            });
        } catch(err) {
            console.log(err);
        }
    },
    createJournalPost: async (req, res) => {
        try {
            await JournalPost.create({
              storyTitle: req.body.storyTitle,
              story: req.body.story,
              eventId: req.params.id,
            });
            console.log("Post has been added!");
            res.redirect(`/events/${req.params.id}/journal`);
          } catch (err) {
            console.log(err);
          }
    },
    getMedia: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            const user = await User.findById(event.user);
            res.render('media.ejs', {
                event: event,
                media: event.media,
                user: user
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