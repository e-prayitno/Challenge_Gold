/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('account_app', (table)=>{
        table.increments('id_account', {primaryKey:true});
        table.string("name_acc", 50).notNullable();
        table.string("email_acc", 50).notNullable();
        table.string("meeting_id", 30).notNullable();
        table.string("pass_meeting", 30).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("account_app")
};
