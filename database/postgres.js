const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('productviewdb', 'productview','pineapple', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});
/*
name,id,description,materials,sustainibility,packaging.shortDesc,packaging.measurments.width,packaging.measurments.height,packaging.measurments.length,packaging.measurments.weight,packaging.measurments.packages,sizes.fitting,sizes.attributes.thread-count,sizes.attributes.Pillowcase quantity,sizes.attributes.Duvet cover length,sizes.attributes.Duvet cover width,sizes.attributes.Pillowcase length,sizes.attributes.Pillowcase width,imageUrls*/

const Product = sequelize.define('largeschematestitem',{
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
  imageurls: {
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

sequelize.sync();

const shutdownPostgres = sequelize.close;

module.exports = { Product, shutdownPostgres };

