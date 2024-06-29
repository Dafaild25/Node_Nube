/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('bill', function(table) {
        // Agregar la columna 
        table.integer('fk_user').unsigned();
    
        // Configurar la clave foránea
        table.foreign('fk_user').references('id').inTable('user');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('bill', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('fk_user');
    
        // Eliminar la columna 
        table.dropColumn('fk_user');
    });
};
