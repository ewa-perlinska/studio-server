const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../user/model");

const Workshop = db.define("workshop", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a workshop" }
    }
  },
  by: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a name" }
    }
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter date" }
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
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a email" }
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a price" }
    }
  },
  descriptionOfWorkshop: {
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

Workshop.belongsTo(User);
User.hasMany(Workshop);

module.exports = Workshop;
