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
    images: [
        {
            secureUrl: {
                type: String,
                required: true,
            },
            cloudinaryId: {
                type: String,
                required: true,
            },
        }
    ],
    activities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Activity",
        }
    ],
    journalEntries: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "JournalPost",
        }
    ],
    media: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Media",
        }
    ],
    questionsAndAnswers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Q&A",
        }
    ],
    schedule: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Schedule",
        }
    ],
    travelAndLodging: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Travel&Lodging",
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},  {
    timestamps: true
});

module.exports = mongoose.model('Event', EventSchema);