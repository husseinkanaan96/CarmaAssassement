/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('creditcard_info', function(table) {
        table.increments('id');
        table.string('name', 50).notNullable();
        table.string('card_number', 100);
        table.string('cvv',100);
        table.string('expiry_date')
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // Drop the creditcard_info table if it exists
  return knex.schema.dropTableIfExists('creditcard_info');
};
