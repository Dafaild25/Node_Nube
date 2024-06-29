/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('product', function(table) {
        // Agregar la columna 
        table.integer('fk_proveedor').unsigned();
    
        // Configurar la clave foránea
        table.foreign('fk_proveedor').references('id').inTable('supplier');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('product', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('fk_proveedor');
    
        // Eliminar la columna 
        table.dropColumn('fk_proveedor');
    });
  
};
