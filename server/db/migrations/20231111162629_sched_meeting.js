/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('sched_meeting', (table)=>{
        table.increments('id_book', {primaryKey:true});
        table.string("title_meeting").notNullable();
        table.time("start_time").notNullable();
        table.date("start_date").notNullable();
        table.time("end_time").notNullable();
        table.date("end_date").notNullable();
        table.integer("id_req").unsigned().references("id_req").inTable("request")
        table.integer("id_account").unsigned().references("id_account").inTable("account_app")
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("sched_meeting")
};
