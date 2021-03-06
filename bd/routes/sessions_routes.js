const express = require('express')

let sessionsController = require('../controllers/sessions')

let router = express.Router()

router.route('/sessions')
        .get(sessionsController.new)
        .post(sessionsController.create)

module.exports = router;