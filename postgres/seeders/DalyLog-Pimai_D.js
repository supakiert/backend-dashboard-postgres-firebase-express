const data_Pimai_D = require("../../raw_data/Pimai_D/FB-ADN-Pimai_D_20232303.json");
module.exports = {
    up: (queryInterface, Sequelize) => {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();


        var day = data_Pimai_D[year][month].length - 1;
        console.log(data_Pimai_D[year][month][day]);
        
        return queryInterface.bulkInsert("DalyLog", [
            {
                Year: year,
                Month: month,
                Day: day,
                Irrigation: data_Pimai_D[year][month][day].Irrigation,
                KC: data_Pimai_D[year][month][day].KC,
                Max: data_Pimai_D[year][month][day].Max,
                Min: data_Pimai_D[year][month][day].Min,
                RainDay: data_Pimai_D[year][month][day].RainDay,
                SumetInterval: data_Pimai_D[year][month][day].SumetInterval,
                SumrainInterval: data_Pimai_D[year][month][day].SumrainInterval,
                etDay: data_Pimai_D[year][month][day].etDay,
                meanDay: data_Pimai_D[year][month][day].meanDay,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("DalyLog", null, {});
    },
};
