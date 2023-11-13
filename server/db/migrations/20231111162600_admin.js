/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('admin', (table)=>{
        table.increments('id_admin', {primaryKey:true});
        table.string("u_admin", 30).notNullable();
        table.string("p_admin", 30).notNullable();
        table.string("name_admin", 50).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        // table.boolean("approval").notNullable().defaultTo(false);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("admin")
};
