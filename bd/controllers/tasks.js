const { response } = require('express')

const Task = require('../models').Task 

module.exports = {
    index: function(req,res){
        Task.findAll()
        .then(response => {
            res.json(response) 
        })
    },
    create: function (req, res) {
        Task.create({
            description: req.body.description
        })
        .then(result => res.json(result))
        .catch(error => {
            console.log(error)
            res.json(error)
        })
    },

    new: function(req,res){
        res.render('tasks/new')

    }
}