const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
  storyTitle: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
},  {
  timestamps: true
});

module.exports = mongoose.model("JournalPost", JournalSchema);