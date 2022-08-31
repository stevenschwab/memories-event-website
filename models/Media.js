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
    likes: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},  {
    timestamps: true
});

module.exports = mongoose.model('Media', MediaSchema);