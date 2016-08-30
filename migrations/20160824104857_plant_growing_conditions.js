
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants', function(table) {
  table.increments();
  table.string('name').notNullable().unique();
  // table.string('sunExposureMax').notNullable();
  // table.string('sunExposureMin').notNullable();
  table.string('waterRequirementsMax').notNullable();
  table.string('waterRequirementsMin').notNullable();
  table.string('tempRangeMax').notNullable();
  table.string('tempRangeMin').notNullable();
  table.string('humidityMax').notNullable();
  table.string('humidityMin').notNullable();
  // table.string('spacing').notNullable();
  // table.string('harvest').notNullable();
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plants');
};

// id: 1,
// name: 'Basil',
// sunExposureMax: ,
// sunExposureMin: ,
// waterRequireMax: 750,
// waterRequireMin: 500,
// tempRangeMax: 50,
// tempRangeMin: 70,
// humidityMax: 60,
// humidityMin: 50
