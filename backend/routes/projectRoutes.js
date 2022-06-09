const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const authMiddleware = require("../middlewares/authMiddleware");
const Project = require("../models/Project");

const projectRouter = express.Router();

//create Project
projectRouter.post(
  "/create",
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    //user from req.user
    const userId = req.user._id;

    const project = await Project.create({
      title: req.body.title,
      category: req.body.category,
      status: req.body.status,
      createdBy: userId,
      manager: req.body.manager,
    });

    if (project) {
      res.status(200);
      res.json(project);
    } else {
      res.status(500);
      throw new Error("Project Creating failed");
    }
  })
);

//get projects list
projectRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const project = await Project.find({});

    if (project) {
      res.status(200);
      res.json(project);
    } else {
      res.status(500);
      throw new Error("No projects find");
    }
  })
);

//Update projects

projectRouter.put(
  "/:id",
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (project) {
      const updateProject = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200);
      res.json(updateProject);
    } else {
      res.status(500);
      throw new Error(" update failed");
    }
  })
);

//delete project

projectRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const project = await Project.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(project);
    } catch (error) {
      res.json(error);
    }
  })
);

module.exports = projectRouter;
