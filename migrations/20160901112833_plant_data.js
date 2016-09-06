
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plantsensordata', function(table) {
  table.increments();
  // table.integer('sunlight').notNullable();
  table.integer('analogmoisture').notNullable();
  table.integer('digmoisture').notNullable();
  table.double('humidity').notNullable();
  table.double('temperature').notNullable();
  table.timestamp('timestamp').notNullable();
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plantsensordata');
};
