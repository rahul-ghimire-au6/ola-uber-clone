'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bookings', [{
      user_id: 1,
      driver_id: 4,
      pickup_location:'DP Road, Badlapur, Ambarnath, Thane, Maharashtra, 421503, India',
      destination_location:'Manjarli, Ambarnath, Thane, Maharashtra, 421503, India',
      pickup_lat:'19.1664503',
      pickup_lon:'73.2323097',
      destination_lat:'19.1745451',
      destination_lon:'73.2375331',         
      createdat: new Date(),
      updatedat: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
