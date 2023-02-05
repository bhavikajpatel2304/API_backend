const mongoose = require("mongoose");

const Project = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    summary: {
      type: String,
      required: true,
    },

    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", Project);