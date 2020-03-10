const express = require("express");
const db = require("../src/db");

const app = express();
const port = process.env.PORT || 4000;

const cors = require("cors");
const corsMiddleWare = cors();

app.use(corsMiddleWare);

const bodyParser = require("body-parser");
const bodyParserMiddleWare = bodyParser.json();

app.use(bodyParserMiddleWare);

app.get("/ping", (request, response) => {
  response.send("are you there?");
});

const userRoutes = require("../src/user/router");
const studioRoutes = require("../src/studio/router");
const projectRoutes = require("../src/project/router");
const imageRoutes = require("../src/image/router");
const workshopRoutes = require("../src/workshop/router");
app.use(studioRoutes);
app.use(userRoutes);
app.use(projectRoutes);
app.use(imageRoutes);
app.use(workshopRoutes);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
