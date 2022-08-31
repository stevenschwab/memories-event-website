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