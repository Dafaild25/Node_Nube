/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('send', function(table) {
        // Agregar la columna 
        table.integer('fk_cliente').unsigned();
    
        // Configurar la clave foránea
        table.foreign('fk_cliente').references('id').inTable('customer');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('send', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('fk_cliente');
    
        // Eliminar la columna 
        table.dropColumn('fk_cliente');
    });
};
