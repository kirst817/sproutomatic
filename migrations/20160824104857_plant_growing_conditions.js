
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants', function(table) {
  table.increments('id').primary();
  table.string('plant').notNullable().unique();
  table.string('sun_exposure').notNullable();
  table.string('water_requirements').notNullable();
  table.string('temp_range').notNullable();
  table.string('spacing').notNullable();
  table.string('harvest').notNullable();
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plants');
};
