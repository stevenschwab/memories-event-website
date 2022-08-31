const mongoose = require('mongoose');

const TravelAndLodgingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        require: true,
    },
    website: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},  {
    timestamps: true
});

module.exports = mongoose.model('TravelAndLodging', TravelAndLodgingSchema);