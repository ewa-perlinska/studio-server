const Sequelize = require("sequelize");
const db = require("../db");
const Project = require("../project/model");

const Image = db.define("image", {
  image: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Image.belongsTo(Project);
Project.hasMany(Image);

module.exports = Project;
