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
    pictureOne: {
        type: String,
        required: true,
    },
    pictureTwo: {
        type: String,
        required: true,
    },
    pictureThree: {
        type: String,
        required: true,
    },
    pictureFour: {
        type: String,
        required: true,
    },
    cloudinaryId: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Event', EventSchema)