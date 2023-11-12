// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'localhost',
	    port : 5432,
	    user : 'postgres',
	    password : 'nimda',
	    database : 'zoomallotment'
    },
    migrations:{
      directory:__dirname + '/db/migrations'
    },
    seeds:{
      directory:__dirname + '/db/seeds'
    }
  }
};