const mongoose = require("mongoose");

const qAndASchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
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

module.exports = mongoose.model("Q&A", qAndASchema);