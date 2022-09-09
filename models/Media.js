const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    cloudinaryId: {
        type: String,
        require: true,
    },
    isAnonymous: {
        type: Boolean,
        required: true,
    },
    credit: {
        type: String,
        required: false,
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MediaComment",
    },
    likes: {
        type: Number,
        required: false,
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
    },
},  {
    timestamps: true
});

module.exports = mongoose.model('Media', MediaSchema);