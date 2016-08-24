
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userPlants', function(table) {
  table.increments('id').primary();
  table.string('user_id').references('users.id');
  table.string('plant_id').references('plants.id');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userPlants');
};
