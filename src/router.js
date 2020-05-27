const express = require("express")

const route = express.Router()

const UserController = require("./controllers/User")

route.get("/", UserController.index)

route.post('/test', UserController.create);

route.get("/user/:username", UserController.filterId)

route.delete("/user/delete/:user", UserController.dlt)

route.patch("/user/update/:user", UserController.update)

// route.get("/user/:username", UserController.filter)

// route.delete("/user/delete/:username", UserController.delete)

module.exports = route


