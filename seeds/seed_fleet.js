const faker = require('faker');
const moment = require('moment');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fleets').del()
    .then(function () {
      let fleets = [];

      for(let i = 1; i<= 20; i++) {
        fleets.push({fleetName: faker.hacker.noun(), fleetType: 'sedan', capacity: 5, registeredAt: moment().toDate() });
      }
      return knex('fleets').insert(fleets);
    });
};
