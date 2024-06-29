/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('supplier', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('email').notNullable();
        table.string('direccion').notNullable();
        table.boolean('estado').notNullable().defaultTo(true);
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('supplier')
  
};
