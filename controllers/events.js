const Event = require('../models/Event')

module.exports = {
    getEvent: async (req, res) => {
        try {
            const event = await Event.find({ _id: req.parameter.eventIdFromJSFile });
            res.render('events.ejs', {
                event: event, 
            }) //tells ejs to render and responds with html
        } catch(err) {
            console.log(err)
        }
    }
}