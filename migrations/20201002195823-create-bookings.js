'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      driver_id: {
        type: Sequelize.INTEGER
      },
      pickup_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destination_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pickup_lat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pickup_lon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destination_lat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destination_lon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdat: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedat: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookings');
  }
};