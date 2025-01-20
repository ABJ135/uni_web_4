const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const projectSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  supervisorId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  Status: {
    type: String,
    enum: ["proposed", "completed"],
  }
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
