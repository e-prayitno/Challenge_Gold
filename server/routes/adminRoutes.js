const express = require("express")
const routes = express.Router()
const ControllerAdmin = require("../controllers/AdminController")

routes.get("/", ControllerAdmin)
module.exports = routes