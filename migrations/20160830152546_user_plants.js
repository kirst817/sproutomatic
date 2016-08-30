exports.up = function(knex, Promise) {
  return knex.schema.createTable('userPlants', function(table) {
  table.increments().primary();
  table.integer('user_id').unsigned().references('id').inTable('users');
  table.integer('plant_id').unsigned().references('id').inTable('plants');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userPlants');
};
