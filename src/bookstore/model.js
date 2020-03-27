const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../user/model");

const Bookstore = db.define("bookstore", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a name" }
    }
  },

  hourOfOpening: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter opening hour" }
    }
  },
  hourOfOclosing: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter hour closing" }
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
  phoneNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a phone Number" }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a email" }
    }
  },
  website: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a website" }
    }
  },
  descriptionOfBookstore: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter a description of bookstore" }
    }
  },
  featuredImage: {
    type: Sequelize.STRING,
    unique: true
  }
});

Bookstore.belongsTo(User);
User.hasMany(Bookstore);

module.exports = Bookstore;
