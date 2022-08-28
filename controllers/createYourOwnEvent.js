const cloudinary = require("../middleware/cloudinary");
const Event = require('../models/Event');

module.exports = {
    getIndex: async (req, res) => {
        console.log(req.user);
        try {
            const events = await Event.find({ userId: req.user.id });
            res.render('eventIndex.ejs', {
                event: events, 
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
    }
}