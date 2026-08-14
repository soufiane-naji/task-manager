const mongoose = require("mongoose");

const schemaTask = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },

  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
  },

  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },

  createdAt: {
    type: Date,
    required: true,
  },

  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
});

const Task = mongoose.model("Task", schemaTask);

module.exports = Task;
