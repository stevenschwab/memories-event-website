const mongoose = require("mongoose");

const MediaCommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  mediaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Media",
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
},  {
  timestamps: true
});

module.exports = mongoose.model("MediaComment", MediaCommentSchema);