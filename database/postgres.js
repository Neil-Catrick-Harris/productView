const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('productviewdb', 'productview','pineapple', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const Product = sequelize.define('item', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
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
  'packaging_shortdesc': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'packaging_measurments_width': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'packaging_measurments_height': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'packaging_measurments_length': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'packaging_measurments_weight': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'packaging_measurments_packages': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'sizes_fitting': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'sizes_attributes_threadcount': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'sizes_attributes_pillowcase_quantity': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'sizes_attributes_duvet_cover_length': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'sizes_attributes_duvet_cover_width': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'sizes_attributes_pillowcase_length': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'sizes_attributes_pillowcase_width': {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageids: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  }
});

const Image = sequelize.define('image', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

const ItemImage = sequelize.define('item_image', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  itemid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imageid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

sequelize.sync();

const shutdownPostgres = sequelize.close;

module.exports = { Product, Image, ItemImage, shutdownPostgres };

