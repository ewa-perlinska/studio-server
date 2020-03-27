const { Router } = require("express");
const auth = require("../auth/middleWare");
const Project = require("./model");
const Studio = require("../studio/model");
const Image = require("../image/model");
const router = new Router();
const _ = require("lodash");
router.get("/project", async function(request, response, next) {
  try {
    const projects = await Project.findAll();
    response.send(projects);
    console.log("done");
  } catch (error) {
    next(error);
  }
});
router.get("/project/:id", async function(request, response, next) {
  try {
    const project = await Project.findByPk(request.params.id);
    response.send(project);
    console.log("done");
  } catch (error) {
    next(error);
  }
});
router.post("/studio/:id/project", async function(request, response, next) {
  try {
    // console.log("how my request looks?", request.user.dataValues.id);
    console.log("WHAT IS STUDIO ID ", request.params.id);
    const studioId = 2;

    const studio = await Studio.findByPk(studioId);
    if (studio) {
      request.body.projectDetails.userId = 1;
      console.log("HOW MY REQUEST  BODY LOOOKS ", request.body.projectDetails);
      const newProject = { ...request.body };
      console.log("what is my new !!!!! project ", newProject.projectDetails);
      newProject.projectDetails.studioId = request.params.id;
      const project = await Project.create(newProject.projectDetails);
      console.log(
        "what is request.body.image????????",
        newProject.projectDetails.image
      );
      const projectImages = _.flatten(newProject.projectDetails.image);
      console.log("what is flat project", projectImages);
      await Promise.all(
        projectImages.map(async image => {
          console.log("creating image:", image);
          return await Image.create({
            image: image,
            projectId: newProject.id
          });
        })
      );
      const newProjectWithImages = await Project.findByPk(newProject.id, {
        include: [Image]
      });
      response.send(newProjectWithImages);
    } else {
      return response.status(404).send("Page not Found");
    }
  } catch (error) {
    next(error);
  }
});
router.patch("/project/:id", async function(request, response, next) {
  try {
    const project = await Project.findByPk(request.params.id);
    if (project) {
      return response.send(await project.update(request.body));
    } else {
      return response.status(404).send("Page not Found");
    }
  } catch (error) {
    next(error);
  }
});
router.get("/project/my", auth, async function(request, response, next) {
  console.log("my studdiiooooooo / user id ", request.user.dataValues.id);
  const userId = request.user.dataValues.id;
  try {
    const project = await Project.findAll({
      where: {
        userId: userId
      }
    });
    response.send(projects);
    console.log("done");
  } catch (error) {
    next(error);
  }
});
router.patch("/project/:id", async function(request, response, next) {
  try {
    const project = await Project.findByPk(request.params.id);
    if (project) {
      const updatedProject = await project.update(request.body);
      return response.send(updatedProject);
    } else {
      return response.status(404).send("Page not Found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
