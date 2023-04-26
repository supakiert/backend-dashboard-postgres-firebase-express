"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Config", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: Sequelize.STRING,
      },
      Area: {
        type: Sequelize.STRING,
      },
      DAP: {
        type: Sequelize.STRING,
      },
      Interval: {
        type: Sequelize.STRING,
      },
      Pump: {
        type: Sequelize.STRING,
      },
      Time: {
        type: Sequelize.STRING,
      },
      pumpRadte: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Config");
  },
};
