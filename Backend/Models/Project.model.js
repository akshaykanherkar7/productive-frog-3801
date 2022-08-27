const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  client: { type: String, required: true },
  startdate: { type: String, required: true },
  due: { type: Number, required: true },
  paid: { type: Number, required: true },
  userId: { type: String, required: true },
});

const ProjectModel = mongoose.model("Project", projectSchema);

module.exports = ProjectModel;
