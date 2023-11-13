/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('approval', (table)=>{
        console.log('masuk');
        table.increments('id_approval', {primaryKey:true});
        table.boolean("type_approval").notNullable().defaultTo(false);
        table.time("time_approval").notNullable();
        table.date("date_approval").notNullable();
        table.integer("id_book").unsigned().references("id_book").inTable("sched_meeting")
        table.integer("id_admin").unsigned().references("id_admin").inTable("admin")
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("approval")
};
