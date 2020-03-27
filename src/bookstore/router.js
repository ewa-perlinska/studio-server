const { Router } = require("express");
const auth = require("../auth/middleWare");
const Bookstore = require("./model");

const router = new Router();

router.get("/bookstore", async function(request, response, next) {
  try {
    const bookstores = await Bookstore.findAll();
    response.send(bookstores);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

// router.get("/exhibtion/:id", async function(request, response, next) {
//   try {
//     const exhibtion = await Exhibtion.findByPk(request.params.id);
//     response.send(exhibtion);
//     console.log("done");
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/bookstore", auth, async (request, response) => {
  console.log("how my request looks?", request.user.dataValues.id);
  console.log(
    "whaaaaaaat is request.body.bookstores",
    request.body.bookStoreDetails
  );
  console.log("whaaaaaaat is request.body", request.body);
  request.body.bookStoreDetails.userId = request.user.dataValues.id;
  const newBookstore = { ...request.body };
  console.log("what is my new exhibition ", newBookstore.bookStoreDetails);

  const bookstore = await Bookstore.create(newBookstore.bookStoreDetails);
  return response.status(201).send(bookstore);
});

router.get("/bookstore/my", auth, async function(request, response, next) {
  console.log("my bookstore / user id ", request.user.dataValues.id);
  const userId = request.user.dataValues.id;
  try {
    const bookstores = await Bookstore.findAll({
      where: {
        bookstore: bookstore
      }
    });
    response.send(bookstores);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

router.patch("/bookstore/:id", async function(request, response, next) {
  try {
    console.log("what is my request body ", request.body);

    const bookstore = await Bookstore.findByPk(request.params.id);
    if (bookstore) {
      const updatedBookstore = await Bookstore.update(
        request.body.bookStoreDetails
      );

      return response.send(updatedBookstore);
    } else {
      return response.status(404).send("Page not Found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
