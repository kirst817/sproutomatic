
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants', function(table) {
  table.increments();
  table.string('name').notNullable().unique();
  table.integer('sunExposureMax').notNullable();
  table.integer('sunExposureMin').notNullable();
  table.integer('waterRequirementsMax').notNullable();
  table.integer('waterRequirementsMin').notNullable();
  table.integer('tempRangeMax').notNullable();
  table.integer('tempRangeMin').notNullable();
  table.integer('humidityMax').notNullable();
  table.integer('humidityMin').notNullable();
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plants');
};

// id: 1,
// name: 'Basil',
// sunExposureMax: 200,
// sunExposureMin: 500,
// waterRequireMax: 750,
// waterRequireMin: 500,
// tempRangeMax: 50,
// tempRangeMin: 70,
// humidityMax: 60,
// humidityMin: 50
