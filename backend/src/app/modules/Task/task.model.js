const mongoose = require("mongoose");


//! Task Schema
const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Enter title"],
    },
    description: {
      type: String,
      required: [true, "Enter title"],
    },
    status: {
      type: ["completed, incomplete"],
      default: "incomplete",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = mongoose.model("Task", TaskSchema);
