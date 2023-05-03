const data_Pimai_D = require("../../raw_data/Pimai_D/FB-ADN-Pimai_D_20232303.json");
var keys = Object.keys(data_Pimai_D[2023]);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("DalyLog", [
      {
        Year: "2023",   
        Month: "3",
        Day: "25",
        Irrigation: data_Pimai_D[2023][5][3].Irrigation,
        KC: data_Pimai_D[2023][5][3].KC,
        Max: data_Pimai_D[2023][5][3].Max,
        Min: data_Pimai_D[2023][5][3].Min,
        RainDay: data_Pimai_D[2023][5][3].RainDay,
        SumetInterval: data_Pimai_D[2023][5][3].SumetInterval,
        SumrainInterval: data_Pimai_D[2023][5][3].SumrainInterval,
        etDay: data_Pimai_D[2023][5][3].etDay,
        meanDay: data_Pimai_D[2023][5][3].meanDay,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("DalyLog", null, {});
  },
};
