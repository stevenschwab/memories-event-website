const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  story: {
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

module.exports = mongoose.model("JournalPost", JournalSchema);