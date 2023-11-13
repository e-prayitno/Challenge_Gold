/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currDate = new Date()
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('client').del()
  await knex('client').insert([
    {username_client: 'eko', password_client:'123', name_client: 'Eko Prayitno', department :'Informasi', created_at: currDate},
    {username_client: 'oke', password_client:'213', name_client: 'Oke Aja Lah', department :'Keuangan', created_at: currDate},
    {username_client: 'koe', password_client:'321', name_client: 'Koe Juga Bisa', department :'Umum', created_at: currDate}
  ]);
};
