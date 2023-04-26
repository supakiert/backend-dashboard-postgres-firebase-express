const data_Sakon_K = require('../../raw_data/Sakon_K/FB-ADN-Sakon_K_20232303.json');
var keys = Object.keys(data_Sakon_K);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Config', [{
    
      id: "Sakon_K",
      Area:data_Sakon_K.config.Area,
      DAP:data_Sakon_K.config.DAP,
      Interval:data_Sakon_K.config.Interval,
      Pump:data_Sakon_K.config.Pump,
      Time:data_Sakon_K.config.Time,
      pumpRadte:data_Sakon_K.config.pumpRadte,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Config', null, {});
  }
};