const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('productviewdb', 'productview','pineapple', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const Product = sequelize.define('item',{
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  articleNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false
  },
  materials: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sustainibility: {
    type: DataTypes.STRING,
    allowNull: false
  },
  packaging: {
    type: DataTypes.JSON,
    allowNull: false
  },
  sizes: {
    type: DataTypes.JSON,
    allowNull: false
  },
  imageUrls: {
    type: DataTypes.JSON,
    allowNull: false
  }
});

const shutdownPostgres = sequelize.close;

module.exports = { Product, shutdownPostgres };

