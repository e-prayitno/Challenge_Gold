/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('request', (table)=>{
        table.increments('id_req', {primaryKey:true});
        table.time("time_request").notNullable();
        table.date("date_request").notNullable();
        table.integer("id_client").unsigned().references("id_client").inTable("client")
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("request")
};
