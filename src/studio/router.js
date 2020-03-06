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

// router.get("/event/:id", async function(request, response, next) {
//   try {
//     const event = await Event.findByPk(request.params.id);
//     response.send(event);
//     console.log("done");
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/studio", auth, async (request, response) => {
  console.log("how my request looks?", request.user.dataValues.id);
  console.log("how my request looks?");
  const newStudio = { ...request.body, userId: request.user.dataValues.id };
  const studio = await Studio.create(newStudio);
  return response.status(201).send(studio);
});

module.exports = router;
