const mongoose = require("mongoose");

const Bug = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Open", "Closed", "Working"],
    },

    priority: {
      type: String,
      enum: ["Low", "Intermediate", "High", "Critical"],
    },

    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },

    assigned_to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },

    deadline: {
      type: Date,
      required: true,
    },

    comments: [
      {
        comment_by: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Member"
        },

        comment: {
          type: String,
          required: true,
        },

        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bug", Bug);