const cloudinary = require("../middleware/cloudinary");
const Event = require('../models/Event');
const User = require('../models/User');
const JournalPost = require('../models/JournalPost');
const Media = require('../models/Media');
const fs = require('fs');

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
            const media = await Media.find({ eventId: req.params.id });
            res.render('media.ejs', {
                event: event,
                media: media,
                user: user
            });
        } catch(err) {
            console.log(err);
        }
    },
    addMedia: async (req, res) => {
        try {
            if (req.body.anonymous) {
                req.body.anonymous = true;
            }
            // Upload image to cloudinary
            const uploader = async (path) => await cloudinary.uploader.upload(path);

            const files = req.files;
            for (const file of files) {
                let { path } = file;
                let newPath = await uploader(path);

                await Media.create({
                    secureUrl: newPath.secure_url,
                    cloudinaryId: newPath.public_id,
                    isAnonymous: req.body.anonymous,
                    credit: req.body.mediaCredit,
                    eventId: req.params.id
                });
                fs.unlinkSync(path)
            }
            console.log('Media has been added!');
            res.redirect(`/events/${req.params.id}/media`);
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