const express = require('express')

let router = express.Router()
let RegistrationsController = require("../controllers/registrations")

router.get("/signup", RegistrationsController.new)
router.route("/users")
        .post(RegistrationsController.create)

module.exports = router