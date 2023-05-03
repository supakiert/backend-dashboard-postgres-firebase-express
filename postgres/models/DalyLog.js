'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DalyLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DalyLog.init({
    Year: DataTypes.STRING,
    Month: DataTypes.STRING,
    Day: DataTypes.STRING,
    Irrigation: DataTypes.STRING,
    KC: DataTypes.STRING,
    Max: DataTypes.STRING,
    Min: DataTypes.STRING,
    RainDay: DataTypes.STRING,
    SumetInterval: DataTypes.STRING,
    SumrainInterval: DataTypes.STRING,
    etDay: DataTypes.STRING,
    meanDay: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'DalyLog',
  });
  return DalyLog;
};