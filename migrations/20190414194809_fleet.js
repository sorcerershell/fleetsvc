
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('fleets', table => {
      table.increments('id').primary();
      table.string('fleetName');
      table.string('fleetType');
      table.string('licenseNumber');
      table.integer('capacity');
      table.date('registeredAt');
      table.boolean('isDeleted').defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('fleets');
};
