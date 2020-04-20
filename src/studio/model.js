const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../user/model");

const Studio = db.define("studio", {
  studioName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a studio name" }
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
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a number" }
    }
  },
  descriptionOfStudio: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a description" }
    }
  },
  descriptionOfCaseStudies: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a description" }
    }
  },
  descriptionOfPractie: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a description" }
    }
  },
  descriptionOfDesignEducation: {
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

Studio.belongsTo(User);
User.hasMany(Studio);

module.exports = Studio;
