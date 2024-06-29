/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    return knex.schema.createTable('bill', table => {
        table.increments('id').primary();
        table.string('cedula').notNullable();
        table.string('venta').notNullable();
        table.string('cliente').notNullable();
        table.timestamp(true,true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('bill')
  
};
