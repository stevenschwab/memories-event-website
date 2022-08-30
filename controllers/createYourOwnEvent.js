const cloudinary = require("../middleware/cloudinary");
const Event = require('../models/Event');

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
            const result = await cloudinary.uploader.upload(req.file.path);

            await Event.create({
                eventName: req.body.eventName,
                eventSubHeader: req.body.eventSubHeader,
                image: result.secure_url,
                cloudinaryId: result.public_id,
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