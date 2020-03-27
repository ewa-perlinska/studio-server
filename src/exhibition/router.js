const { Router } = require("express");
const auth = require("../auth/middleWare");
const Exhibtion = require("./model");

const router = new Router();

router.get("/exhibtion", async function(request, response, next) {
  try {
    const exhibtions = await Exhibition.findAll();
    response.send(exhibtions);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.get("/exhibtion/:id", async function(request, response, next) {
  try {
    const exhibtion = await Exhibtion.findByPk(request.params.id);
    response.send(exhibtion);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.post("/exhibtion", auth, async (request, response) => {
  console.log("how my request looks?", request.user.dataValues.id);
  console.log("whaaaaaaat is request.body.ex", request.body.exhibitionDetails);
  console.log("whaaaaaaat is request.body", request.body);
  request.body.exhibitionDetails.userId = request.user.dataValues.id;
  const newExhibtion = { ...request.body };
  console.log("what is my new exhibition ", newExhibtion.exhibitionDetails);

  const exhibtion = await Exhibtion.create(newExhibtion.exhibitionDetails);
  return response.status(201).send(exhibtion);
});

router.get("/exhibition/my", auth, async function(request, response, next) {
  console.log("my exhibition / user id ", request.user.dataValues.id);
  const userId = request.user.dataValues.id;
  try {
    const exhibtions = await Exhibition.findAll({
      where: {
        exhibtion: exhibtion
      }
    });
    response.send(exhibtions);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.patch("/exhibition/:id", async function(request, response, next) {
  try {
    console.log("what is my request body ", request.body);

    const exhibtion = await Exhibition.findByPk(request.params.id);
    if (exhibtion) {
      const updatedExhibition = await Exhibition.update(
        request.body.exhibtionDetails
      );

      return response.send(updatedExhibition);
    } else {
      return response.status(404).send("Page not Found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
