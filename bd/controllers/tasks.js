const { response } = require('express')

const Task = require('../models').Task

module.exports = {
    index: function (req, res) {
        Task.findAll()
            .then(response => {
                res.render('tasks/index', { tasks: response })
            })
    },
    create: function (req, res) {
        Task.create({ description: req.body.description })
            .then(result => res.json(result))
            .catch(error => {
                console.log(error)
                res.json(error)
            })
    },
    new: function (req, res) {
        res.render('tasks/new')

    },
    show: function (req, res) {
        Task.findByPk(req.params.id)
            .then(function (task)
                { res.render('tasks/show', { task: task }) 
            })
            .catch(error => {
                console.log(error)
                res.json(error)
            })
    },
    update: function (req, res) {
        Task.update({description : req.body.description},{
                    where: {id : req.params.id}
        })
        .then(response => {
            res.redirect(`${req.params.id}`)
        })
    }
}