'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DalyLog', {
      Year: {
        type: Sequelize.STRING,
      },
      Month: {
        type: Sequelize.STRING
      },
      Day: {
        type: Sequelize.STRING
      },
      Irrigation: {
        type: Sequelize.STRING
      },
      KC: {
        type: Sequelize.STRING
      },
      Max: {
        type: Sequelize.STRING
      },
      Min: {
        type: Sequelize.STRING
      },
      RainDay: {
        type: Sequelize.STRING
      },
      SumetInterval: {
        type: Sequelize.STRING
      },
      SumrainInterval: {
        type: Sequelize.STRING
      },
      etDay: {
        type: Sequelize.STRING
      },
      meanDay: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DalyLog');
  }
};