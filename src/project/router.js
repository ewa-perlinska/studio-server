const { Router } = require("express");
const auth = require("../auth/middleWare");
const Project = require("./model");

const router = new Router();

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

router.post("/project", auth, async (request, response) => {
  console.log("how my request looks?", request.user.dataValues.id);
  console.log("how my request looks?");
  request.body.projectDetails.userId = request.user.dataValues.id;
  const newProject = { ...request.body };
  console.log("what is my new !!!!! project ", newProject.projectDetails);

  const project = await Project.create(newProject.projectDetails);
  // const projectImage= await
  return response.status(201).send(project);
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

router.get("/myproject", auth, async function(request, response, next) {
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
      return response.send(await project.update(request.body));
    } else {
      return response.status(404).send("Page not Found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
