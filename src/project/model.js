const Sequelize = require("sequelize");
const db = require("../db");
const Studio = require("../studio/model");

const Project = db.define("project", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a title" }
    }
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a year" }
    }
  },
  client: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a client" }
    }
  },

  location: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a location" }
    }
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
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a description" }
    }
  }
});

Project.belongsTo(Studio);
Studio.hasMany(Project);

module.exports = Project;
