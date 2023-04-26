const data_Pimai_D = require("../../raw_data/Pimai_D/FB-ADN-Pimai_D_20232303.json");
var keys = Object.keys(data_Pimai_D);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Config", [
      {
        id: "Pimai_D",
        Area: data_Pimai_D.config.Area,
        DAP: data_Pimai_D.config.DAP,
        Interval: data_Pimai_D.config.Interval,
        Pump: data_Pimai_D.config.Pump,
        Time: data_Pimai_D.config.Time,
        pumpRadte: data_Pimai_D.config.pumpRadte,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Config", null, {});
  },
};
