const Sequelize = require("sequelize");
const db = require("../db");

const Studio = db.define("studio", {
  studioName: { type: Sequelize.STRING, unique: true, allowNull: false },
  street: { type: Sequelize.STRING, unique: true, allowNull: false },
  city: { type: Sequelize.STRING, allowNull: false },
  country: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, unique: true, allowNull: false },
  number: { type: Sequelize.INTEGER, unique: true, allowNull: false },
  descriptionOfStudio: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  descriptionOfCaseStudies: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  descriptionOfPractie: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  descriptionOfDesignEducation: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  featuredImage: { type: Sequelize.STRING, unique: true, allowNull: false }
});

module.exports = Studio;
