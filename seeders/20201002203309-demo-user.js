'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('users', [{
    name: 'Rahul R Ghimire',
    password: '$2a$10$KPaxrFizUt1/j2Lt/mja9.HGWb/Q9ayqBwGaMtpBV.X2Qbtz.pRXW',
    email: 'ghimirerahul@gmail.com',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZ2hpbWlyZXJhaHVsQGdtYWlsLmNvbSIsImlhdCI6MTYwMDk3MDkzOSwiZXhwIjoxNjAwOTc0NTM5fQ.JuMe5sPgpcWs1sUkK2BlViGATpxK88v1Namg1rRRC_I',
    createdat: new Date()
  }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
