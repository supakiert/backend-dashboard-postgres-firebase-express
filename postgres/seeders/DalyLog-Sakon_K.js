const data_Sakon_K = require('../../raw_data/Sakon_K/FB-ADN-Sakon_K_20232303.json');
module.exports = {
    up: (queryInterface, Sequelize) => {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();


        var day = data_Sakon_K[year][month].length - 1;
        console.log(data_Sakon_K[year][month][day]);
        
        return queryInterface.bulkInsert("DalyLog", [
            {
                Year: year,
                Month: month,
                Day: day,
                Irrigation: data_Sakon_K[year][month][day].Irrigation,
                KC: data_Sakon_K[year][month][day].KC,
                Max: data_Sakon_K[year][month][day].Max,
                Min: data_Sakon_K[year][month][day].Min,
                RainDay: data_Sakon_K[year][month][day].RainDay,
                SumetInterval: data_Sakon_K[year][month][day].SumetInterval,
                SumrainInterval: data_Sakon_K[year][month][day].SumrainInterval,
                etDay: data_Sakon_K[year][month][day].etDay,
                meanDay: data_Sakon_K[year][month][day].meanDay,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("DalyLog", null, {});
    },
};
