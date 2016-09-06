
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plantsensordata').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('plantsensordata').insert({
          analogmoisture: 533,
          digmoisture: 1,
          humidity: 46.00,
          temperature: 71.60,
          timestamp: "2016-08-29T02:53:40.887Z"
        }),
        knex('plantsensordata').insert({
          analogmoisture: 528,
          digmoisture: 1,
          humidity: 47.00,
          temperature: 69.80,
          timestamp: "2016-08-29T02:52:23.673Z"
        }),
        knex('plantsensordata').insert({
          analogmoisture: 524,
          digmoisture: 1,
          humidity: 48.00,
          temperature: 69.80,
          timestamp: "2016-08-29T02:50:48.005Z"
        })
      ]);
    });
};
