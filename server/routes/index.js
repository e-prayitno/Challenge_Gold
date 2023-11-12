const express = require ("express")
const app = express()
const PORT = 3000
const db = require("./db/db")

const express = require ('express')
const route = express.Router()
const adminRoute = require('./adminRoutes')
const clientRoute = require('./clientRoutes')