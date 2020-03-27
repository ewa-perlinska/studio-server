const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

const cors = require("cors");
const corsMiddleWare = cors();

app.use(corsMiddleWare);

const bodyParserMiddleWare = express.json();

const db = require("../src/db");

const userRoutes = require("../src/user/router");
const studioRoutes = require("../src/studio/router");
const projectRoutes = require("../src/project/router");
const imageRoutes = require("../src/image/router");
const workshopRoutes = require("../src/workshop/router");

app.use(bodyParserMiddleWare);
app.use(studioRoutes);
app.use(userRoutes);
app.use(projectRoutes);
app.use(imageRoutes);
app.use(workshopRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
