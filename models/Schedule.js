const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        require: true,
    },
    date: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},  {
    timestamps: true
});

module.exports = mongoose.model('Schedule', ScheduleSchema);