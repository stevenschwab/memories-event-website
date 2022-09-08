const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
  storyTitle: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  }
},  {
  timestamps: true
});

module.exports = mongoose.model("JournalPost", JournalSchema);