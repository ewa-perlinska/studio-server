const Sequelize = require("sequelize");
const db = require("../db");
const Studio = require("../studio/model");

const Project = db.define("project", {
  title: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  client: {
    type: Sequelize.STRING
  },

  location: {
    type: Sequelize.STRING
  },
  edition: {
    type: Sequelize.INTEGER
  },
  size: {
    type: Sequelize.STRING
  },
  publisher: {
    type: Sequelize.STRING
  },
  descriptionOfProject: {
    type: Sequelize.STRING
  }
});

Project.belongsTo(Studio);
Studio.hasMany(Project);

module.exports = Project;
