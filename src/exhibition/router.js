const { Router } = require("express");
const auth = require("../auth/middleWare");
const Exhibition = require("./model");

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
  console.log("whaaaaaaat is request.body", request.body.exhibtionDetails);

  request.body.exhibtionDetails.userId = request.user.dataValues.id;
  const newExhibtion = { ...request.body };
  console.log("what is my new exhibition ", newExhibtion.exhibtionDetails);

  const exhibtion = await Exhibtion.create(newExhibtion.exhibtionDetails);
  return response.status(201).send(exhibtion);
});

// router.get("/myworksop", auth, async function(request, response, next) {
//   console.log("my workshop / user id ", request.user.dataValues.id);
//   const userId = request.user.dataValues.id;
//   try {
//     const workshops = await Workshop.findAll({
//       where: {
//         workshop: workshop
//       }
//     });
//     response.send(workshops);
//     console.log("done");
//   } catch (error) {
//     next(error);
//   }
// });

// router.patch("/workshop/:id", async function(request, response, next) {
//   try {
//     console.log("what is my request body ", request.body);

//     const workshop = await Workshop.findByPk(request.params.id);
//     if (workshop) {
//       const updatedWorkshop = await Workshop.update(
//         request.body.workshopDetails
//       );

//       return response.send(updatedWorkshop);
//     } else {
//       return response.status(404).send("Page not Found");
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;
