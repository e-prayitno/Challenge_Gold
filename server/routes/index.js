const express = require("express")
const routes = express.Router()

// const adminRoute = require('./adminRoutes')
const clientRoute = require('./clientRoutes')
// const Controller = require('./controllers/Controller')


// route.use("/admin", adminRoute)
routes.use("/client", clientRoute)



module.exports = routes