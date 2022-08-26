const Event = require('../models/Event')

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
            await Event.create({
                eventName: req.body.eventName,
                eventSubHeader: req.body.eventSubHeader,
                pictureOne: req.body.pictureOne,
                pictureTwo: req.body.pictureTwo,
                pictureThree: req.body.pictureThree,
                pictureFour: req.body.pictureFour,
                userId: req.user.id,
            });
            console.log('Event has been created!');
            res.redirect('/createYourOwnEvent');
        } catch(err) {
            console.log(err);
        }
    },
    editEvent: async (req, res) => {
        try {
            await Todo.findOneAndUpdate(
                {
                    _id: req.body.todoIdFromJSFile
                },
                {
                    eventName: req.body.eventName,
                    eventSubHeader: req.body.eventSubHeader
                }
            )
            console.log('Marked Complete')
            res.json('Marked Complete')
        } catch(err) {
            console.log(err)
        }
    },
    viewEvent: async (req, res) => {
        try {
            const event = await Event.find({ _id: req.parameter.eventIdFromJSFile });
            res.render('events.ejs', {
                event: event, 
            }) //tells ejs to render and responds with html
        } catch(err) {
            console.log(err)
        }
    },
    deleteEvent: async (req, res) => {
        console.log(req.body.eventIdFromJSFile)
        try {
            await Event.findOneAndDelete({ _id: req.body.eventIdFromJSFile });
            console.log('Deleted Event')
            res.json('Deleted It')
        } catch(err) {
            console.log(err)
        }
    }
}