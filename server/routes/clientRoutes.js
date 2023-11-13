const routes = require("express").Router()
const ClientController = require("../controllers/ClientController")


routes.get("/", ClientController.getAllClient)
routes.get("/get", ClientController.index)
routes.post("/", ClientController.createClient)

routes.delete("/:id", ClientController.deleteClient)
routes.put("/:id", ClientController.updateClient)


module.exports = routes