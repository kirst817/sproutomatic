
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plantData', function(table) {
  table.increments().primary();
  table.timestamp('logged_at').defaultTo(knex.raw('now()')).notNullable();
  table.integer('sunlight').notNullable();
  table.integer('moisture').notNullable();
  table.integer('temperature').notNullable();
  table.integer('humidity').notNullable();
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plantData');
};
