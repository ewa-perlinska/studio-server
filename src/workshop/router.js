const { Router } = require("express");
const auth = require("../auth/middleWare");
const Workshop = require("./model");

const router = new Router();

router.get("/workshop", async function(request, response, next) {
  try {
    const workshops = await Workshop.findAll();
    response.send(workshops);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.get("/workshop/:id", async function(request, response, next) {
  try {
    const workshop = await Workshop.findByPk(request.params.id);
    response.send(workshop);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.post("/workshop", auth, async (request, response) => {
  console.log("how my request looks?", request.user.dataValues.id);
  console.log("whaaaaaaat is request.body", request.body.workshopDetails);

  request.body.workshopDetails.userId = request.user.dataValues.id;
  const newWorkshop = { ...request.body };
  console.log("what is my new studio ", newWorkshop.workshopDetails);

  const workshop = await Workshop.create(newWorkshop.workshopDetails);
  return response.status(201).send(workshop);
});

router.get("/myworksop", auth, async function(request, response, next) {
  console.log("my workshop / user id ", request.user.dataValues.id);
  const userId = request.user.dataValues.id;
  try {
    const workshops = await Workshop.findAll({
      where: {
        workshop: workshop
      }
    });
    response.send(workshops);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.patch("/workshop/:id", async function(request, response, next) {
  try {
    console.log("what is my request body ", request.body);

    const workshop = await Workshop.findByPk(request.params.id);
    if (workshop) {
      const updatedWorkshop = await Workshop.update(
        request.body.workshopDetails
      );

      return response.send(updatedWorkshop);
    } else {
      return response.status(404).send("Page not Found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
