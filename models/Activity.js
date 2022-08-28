const mongoose = require('mongoose');

const ActivitiesSchema = new mongoose.Schema({
    activityName: {
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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Activity', ActivitiesSchema);