'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Config.init({
    Area: DataTypes.STRING,
    DAP:DataTypes.STRING, 
    Interval: DataTypes.STRING,
    Pump: DataTypes.STRING,
    Time: DataTypes.STRING,
    pumpRadte:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Config',
  });
  return Config;
};