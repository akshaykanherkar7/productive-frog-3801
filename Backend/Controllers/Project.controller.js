const express = require("express");
const ProjectController = express.Router();

const ProjectModel = require("../Models/Project.model");

ProjectController.post("/", async (req, res) => {
  const { title, client, startdate, due, paid, userId } = req.body;

  const project = new ProjectModel({
    title,
    client,
    startdate,
    due,
    paid,
    userId,
  });
  await project.save();
  return res
    .status(200)
    .send({ message: "Project Successfully Saved", project: project });
});

ProjectController.get("/", async (req, res) => {
  const { userId } = req.body;
  const project = await ProjectModel.find({ userId });
  return res.status(200).send(project);
});

ProjectController.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const project = await ProjectModel.findOne({ _id: id });
  if (!project) {
    return res.status(404).send("Project not found");
  }

  if (project.userId === userId) {
    const updated_project = await ProjectModel.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    return res.status(200).send({
      message: "Project updated successfully",
      project: updated_project,
    });
  } else {
    return res.status(403).send("Error in Project Update");
  }
});

ProjectController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const project = await ProjectModel.findOne({ _id: id });
  if (!project) {
    return res.status(404).send("Project Not Found");
  }

  if (project.userId === userId) {
    const deleted_project = await ProjectModel.findOneAndDelete(
      { _id: id },
      { new: true }
    );
    return res
      .status(200)
      .send({
        message: "Project deleted successfully",
        project: deleted_project,
      });
  } else {
    return res.status(404).send("Project Not Found");
  }
});

module.exports = ProjectController;
