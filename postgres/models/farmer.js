'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Farmer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Farmer.init({
    id: DataTypes.STRING,
    full_name: DataTypes.STRING,
    Size: DataTypes.STRING,
    StartDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Farmer',
  });
  return Farmer;
};