
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({email: 'kirs@email.com', password: 'password'}),
        knex('users').insert({email: 'mike@email.com', password: 'password'}),
        knex('users').insert({email: 'ash@email.com', password: 'password'})
      ]);
    });
};
