const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('productviewdb', 'productview','pineapple', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});
sequelize.sync({force: true});

/*
Schema needs to be:
name,
id,
description,
materials,
sustainibility,
packaging.shortDesc,
packaging.measurments.width,
packaging.measurments.height,
packaging.measurments.length,
packaging.measurments.weight,
packaging.measurments.packages,
sizes.fitting,
sizes.attributes.thread-count,
sizes.attributes.Pillowcase quantity,
sizes.attributes.Duvet cover length,
sizes.attributes.Duvet cover width,
sizes.attributes.Pillowcase length,
sizes.attributes.Pillowcase width,
imageUrls
*/

const standardString = {
  type: DataTypes.STRING,
  allowNull: false,
};

const standardInt = {
  type: DataTypes.INTEGER,
  allowNull: false,
};

// working to separate each sub-object:
// const Product = sequelize.define('testingitems',{
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//   },
//   imageurls: {
//     type: DataTypes.JSON,
//     allowNull: false
//   },
//   name: standardString,
//   description: standardString,
//   materials: standardString,
  // sustainibility: standardString,
  // "packaging.shortDesc": standardString,
  // "packaging.measurments.width": standardInt,
  // "packaging.measurments.height": standardInt,
  // "packaging.measurments.length": standardInt,
  // "packaging.measurments.weight": standardInt,
  // "packaging.measurments.packages": standardInt,
  // "sizes.fitting": standardString,
  // "sizes.attributes.thread-count": standardInt,
  // "sizes.attributes.Pillowcase quantity": standardInt,
  // "Duvet cover length": standardInt,
  // "sizes.attributes.Duvet cover width": standardInt,
  // "sizes.attributes.Pillowcase length": standardInt,
  // "sizes.attributes.Pillowcase width": standardInt,
// });

// going back to json:
const Product = sequelize.define('testingitems',{
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  materials: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sustainibility: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

const Packaging = sequelize.define('testingpackaging',{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  shortdesc: {
    type: DataTypes.STRING,
  },
  measurments: {
    type: DataTypes.JSON,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

const Sizes = sequelize.define('testingsizes',{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  fitting: {
    type: DataTypes.STRING
  },
  attributes: {
    type: DataTypes.JSON
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

const Images = sequelize.define('testingimages',{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  imageurls: {
    type: DataTypes.JSON,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

const shutdownPostgres = sequelize.close;

module.exports = { Product, Packaging, Sizes, Images, sequelize, shutdownPostgres };

