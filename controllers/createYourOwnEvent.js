const cloudinary = require("../middleware/cloudinary");
const Event = require('../models/Event');
const fs = require('fs');

module.exports = {
    getEventIndex: async (req, res) => {
        console.log(req.user);
        try {
            const events = await Event.find({ user: req.user.id });
            res.render('eventIndex.ejs', {
                events: events,
                user: req.user
            });
        } catch(err) {
            console.log(err);
        }
    },
    createEvent: async (req, res) => {
        try {
            // Upload image to cloudinary
            const uploader = async (path) => await cloudinary.uploads(path, 'Images');
            // const result = await cloudinary.uploader.upload(req.file.path);
            const urls = []
            const files = req.files;
            for (const file of files) {
                const { path } = file;
                const newPath = await uploader(path)
                urls.push(newPath)
                fs.unlinkSync(path)
            }

            await Event.create({
                eventName: req.body.eventName,
                eventSubHeader: req.body.eventSubHeader,
                images: urls,
                user: req.user.id,
            });
            console.log('Event has been created!');
            res.redirect('/createYourOwnEvent');
        } catch(err) {
            console.log(err);
        }
    },
    deleteEvent: async (req, res) => {
        try {
          // Find event by id
          let event = await Event.findById({ _id: req.params.id });
          // Delete image from cloudinary
          await cloudinary.uploader.destroy(event.cloudinaryId);
          // Delete post from db
          await Event.remove({ _id: req.params.id });
          console.log("Deleted Event");
          res.redirect("/createYourOwnEvent");
        } catch (err) {
          res.redirect("/createYourOwnEvent");
        }
    },
};