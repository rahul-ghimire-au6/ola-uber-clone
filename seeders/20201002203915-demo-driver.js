'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('drivers', [{
      driver_name: 'Rahul',
      password: '$2a$10$YbsmH7WnofwIgOO5N7fYm.jItIyDkUQxeoNJMgv4L0jnB7QfRDN7q',
      email: 'ghimirerahul@gmail.com',
      latitude:null,
      longitude:null,
      token:null,
      isbooked:false,
      createdat: new Date()
    },{
      driver_name: 'narendra yadav',
      password: '$2a$10$0IjEgpSdjMdD2PsDj0Salev8uIJMut0.TqgdzyMc2AqkRAcShDmlK',
      email: 'narendrayadav@gmail.com',
      latitude:'19.1708994',
      longitude:'73.2420954',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibmFyZW5kcmF5YWRhdkBnbWFpbC5jb20iLCJpYXQiOjE2MDA5NzI3MDYsImV4cCI6MTYwMDk3NjMwNn0.LXYW60HVqpWpynpE7Kko-60ug-Bu__rVtdS4sJJbnEs',
      isbooked:false,
      createdat: new Date()
    },{
      driver_name: 'anand barai',
      password: '$2a$10$OuBYn/aK2BlrIsYqh/rmMu9KlgfVblADIXVhlR51BGh/e97f8M2wS',
      email: 'anandbarai@gmail.com',
      latitude:'19.1766096',
      longitude:'73.2289517',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYW5hbmRiYXJhaUBnbWFpbC5jb20iLCJpYXQiOjE2MDA5NzI3OTksImV4cCI6MTYwMDk3NjM5OX0.ntp0stsL65fmxhySCEqBGRBA8rzdUrhWPpacJ45xu9A',
      isbooked:false,
      createdat: new Date()
    },{
      driver_name: 'hitesh rajbhar',
      password: '$2a$10$BWXdknWPzfiSFt8QuvsRXOMqZpe2ExDpigGwnJnWFjKieJU21hRQq',
      email: 'hiteshrajbhar@gmail.com',
      latitude:'19.165976',
      longitude:'73.238911',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiaGl0ZXNocmFqYmhhckBnbWFpbC5jb20iLCJpYXQiOjE2MDA5NzMwMDMsImV4cCI6MTYwMDk3NjYwM30.kISxp-Lof9GQ2j19wib_B0hhLeUXKmQ5GBuHN2l0NKQ',
      isbooked:false,
      createdat: new Date()
    },{
      driver_name: 'suraj patil',
      password: '$2a$10$.wo3nAC80zVTDXEsLIfg7O8Daul37rNbNc02FV6E1jncL1qUFXl82',
      email: 'surajpatil@gmail.com',
      latitude:'19.1664435',
      longitude:'73.2356893',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoic3VyYWpwYXRpbEBnbWFpbC5jb20iLCJpYXQiOjE2MDA5NzMyNjYsImV4cCI6MTYwMDk3Njg2Nn0.qIGGGJ-XOxLCExVVpD1TgJw3FGyqNJogfF4djVgIdBU',
      isbooked:false,
      createdat: new Date()
    },{
      driver_name: 'rushab jagtap',
      password: '$2a$10$ZmBtKxbP3jCxuHNaUUa5ie9wn80NCa/zCumyMKsUeZRkQNU7rALBa',
      email: 'rushabjagtab@gmail.com',
      latitude:'19.1745451',
      longitude:'73.2375331',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoicnVzaGFiamFndGFiQGdtYWlsLmNvbSIsImlhdCI6MTYwMDk3MzM3NywiZXhwIjoxNjAwOTc2OTc3fQ.iRykbAAxhQep-9HWMoacpRSuOKVOyIkEtYAFCMxwKl4',
      isbooked:false,
      createdat: new Date()
    },{
      driver_name: 'Naved',
      password: '$2a$10$prg3blPwI72TMKQ.jMoRBO9zxyOM8fKcvEAcEEyf1iugGYn3Ij//u',
      email: 'naved@gmail.com',
      latitude:'19.2015607',
      longitude:'73.2004771',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibmF2ZWRAZ21haWwuY29tIiwiaWF0IjoxNjAwOTczNTU4LCJleHAiOjE2MDA5NzcxNTh9.K-oGrhL5P9ZETLk8e2bqFl4wFX-U0fDevT-QUD_EisE',
      isbooked:false,
      createdat: new Date()
    },{
      driver_name: 'mohit dashwani',
      password: '$2a$10$ZQLN9oYu1yHx1ztJli/.H.eBkmyttwBtaWpkN/96vYvUa8JpEEm0.',
      email: 'mohitdashwani@gmail.com',
      latitude:'19.2227363',
      longitude:'73.1657782',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibW9oaXRkYXNod2FuaUBnbWFpbC5jb20iLCJpYXQiOjE2MDA5NzM2MTgsImV4cCI6MTYwMDk3NzIxOH0.1IYoR5HRRMHtKHccLJomvvuWXBgn9pHQDujUyKQz1g0',
      isbooked:false,
      createdat: new Date()
    },{
      driver_name: 'nirzar',
      password: '$2a$10$QeUaHESklM0eTStmEaJdE.VNFc66LIWhFXvUce8SCJtt6xt78UBzK',
      email: 'nirzar@gmail.com',
      latitude:'19.2434721',
      longitude:'73.1397969528524',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibmlyemFyQGdtYWlsLmNvbSIsImlhdCI6MTYwMDk3MzY1OCwiZXhwIjoxNjAwOTc3MjU4fQ.miDRsI11zukrjeoZ34J9yDuMnDDmkVS5R9osvAZqHbw',
      isbooked:false,
      createdat: new Date()
    },{
      driver_name: 'imran shaikh',
      password: '$2a$10$9QCf3XP5XZbo6LqJbvJgU.UUVRg.5O6hKWLwNxG29qpQkzQPClvNe',
      email: 'imranshaikh@gmail.com',
      latitude:'19.1943294',
      longitude:'72.9701779',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiaW1yYW5zaGFpa2hAZ21haWwuY29tIiwiaWF0IjoxNjAwOTczNzA2LCJleHAiOjE2MDA5NzczMDZ9.nC5I0yAJra-ahMfhgJCoZx-ySM98ieO38dMrR3m3Sq0',
      isbooked:false,
      createdat: new Date()
    },{
      driver_name: 'abhijit bhansode',
      password: '$2a$10$MHH8bZP..ZRkL/LXXrQ/L.qf7SsrQ.todWkyVZIZefF/Kpl/C1TKK',
      email: 'abhijitbansode@gmail.com',
      latitude:'19.1659316',
      longitude:'73.2499756',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWJoaWppdGJhbnNvZGVAZ21haWwuY29tIiwiaWF0IjoxNjAwOTcyMjQ5LCJleHAiOjE2MDA5NzU4NDl9.zXaih1M7Pghc37LxM9gcNE8GyW2O5CREAo2sAWQrQBU',
      isbooked:false,
      createdat: new Date()
    },{
      driver_name: 'bipin yadav',
      password: '$2a$10$AiWQdgViHv5a8hDnGPnVReKuxltkei0q4BhuaPUxqJgsAst0DSJUS',
      email: 'bipinyadav@gmail.com',
      latitude:'19.1704205',
      longitude:'73.2398736491734',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYmlwaW55YWRhdkBnbWFpbC5jb20iLCJpYXQiOjE2MDA5NzI0MTEsImV4cCI6MTYwMDk3NjAxMX0.avaZ4cYLLMZet8Q-RlXrtnHt0JbqwvEzxnSmK7qp01Y',
      isbooked:false,
      createdat: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('drivers', null, {});
  }
};
