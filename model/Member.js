const mongoose = require("mongoose");

const Member = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
        type: String,
        required: true
    },

    role: {
      type: String,
      enum: ["DEV", "QA"]
    },

    belongs_to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Member", Member);