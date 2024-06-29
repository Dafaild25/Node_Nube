/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('send',table =>{
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.integer('cantidad').notNullable().defaultTo(0);
        table.decimal('precioUnitario',10,2).defaultTo(0.00);
        table.string('descripcion').notNullable();


    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('send')
  
};
