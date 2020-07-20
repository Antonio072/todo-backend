const express = require('express')

let router = express.Router()
let RegistrationsController = require("../controllers/registrations")

router.get("/signup", RegistrationsController.new)

module.exports = router