/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('product',table =>{
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.integer('cantidad').notNullable();
        table.decimal('precioUnitario').notNullable();
        table.string('descripcion').notNullable();


    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('product')
  
};
