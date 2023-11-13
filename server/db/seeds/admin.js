/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const currDate = new Date()
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('admin').del()
  await knex('admin').insert([
    {u_admin:'eko', p_admin:'1234', name_admin:'EKOEKO', created_at: currDate }
  ]);
};
