const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventSubHeader: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    cloudinaryId: {
        type: String,
        require: true,
    },
    // activity: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Activity",
    // },
    // journalPost: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "JournalPost",
    // },
    // media: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Media",
    // },
    // qAndA: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Q&A",
    // },
    // schedule: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Schedule",
    // },
    // travelAndLodging: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Travel&Lodging",
    // },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Event', EventSchema);