/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('client', (table)=>{
        table.increments('id_client', {primaryKey:true});
        table.string("username_client", 30).notNullable();
        table.string("password_client", 30).notNullable();
        table.string("name_client", 50).notNullable();
        table.string("department", 50).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("client")
};
