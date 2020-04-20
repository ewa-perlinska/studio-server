const { Router } = require("express");
const auth = require("../auth/middleWare");
const Studio = require("./model");

const router = new Router();

router.get("/studio", async function(request, response, next) {
  try {
    const studios = await Studio.findAll();
    response.send(studios);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.get("/studio/:id", async function(request, response, next) {
  try {
    const studio = await Studio.findByPk(request.params.id);
    response.send(studio);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.post("/studio", auth, async (request, response) => {
  console.log("how my request looks?", request.user.dataValues.id);
  console.log("how my request looks?");
  request.body.studioDetails.userId = request.user.dataValues.id;
  const newStudio = { ...request.body };
  console.log("what is my new studio ", newStudio.studioDetails);

  const studio = await Studio.create(newStudio.studioDetails);
  return response.status(201).send(studio);
});

router.get("/mystudio", auth, async function(request, response, next) {
  console.log("my studdiiooooooo / user id ", request.user.dataValues.id);
  const userId = request.user.dataValues.id;
  try {
    const studios = await Studio.findAll({
      where: {
        userId: userId
      }
    });
    response.send(studios);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.patch("/studio/:id", async function(request, response, next) {
  try {
    console.log("what is my request body ", request.body);

    const studio = await Studio.findByPk(request.params.id);
    if (studio) {
      const updatedStudio = await studio.update(request.body.studioDetails);

      return response.send(updatedStudio);
    } else {
      return response.status(404).send("Page not Found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
