const knex = require("knex")
// const knexFile = require("../knexfile")
const knexfile = require("../knexfile")

const db = knex(knexfile.development)

module.exports = db
// module.exports = db("client"), db("admin")