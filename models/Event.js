const mongoose = require('mongoose')
// schema gives the documents you put into mongodb a structure
const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventSubHeader: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Event', EventSchema)