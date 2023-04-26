const data_FarmerV2 = require('../../raw_data/FarmerV2/FB-ADN-WF_20232303.json');
var keys = Object.keys(data_FarmerV2);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Farmers', [{
    
      id:keys[0],
      full_name: data_FarmerV2['SF-01'].Information.Name,
      Size: data_FarmerV2['SF-01'].Information.Size,
      StartDate:data_FarmerV2['SF-01'].Information.StartDate,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Farmers', null, {});
  }
};