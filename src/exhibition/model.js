const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../user/model");

const Exhibition = db.define("exhibiton", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a exhibition" }
    }
  },
  from: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a name" }
    }
  },
  dateOfOpening: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter opening date" }
    }
  },
  dateOfOclosing: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter date closing" }
    }
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a street" }
    }
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a city" }
    }
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a country" }
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a price" }
    }
  },
  descriptionOfExhibition: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a description" }
    }
  },
  featuredImage: {
    type: Sequelize.STRING,
    unique: true
  }
});

Exhibition.belongsTo(User);
User.hasMany(Exhibition);

module.exports = Exhibition;
