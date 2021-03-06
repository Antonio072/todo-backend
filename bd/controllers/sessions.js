const User = require('../models').User

module.exports = {
    new : function(req,res){
        res.render('sessions/new')
    },

    create : function (req,res) {
        User.login(req.body.email,req.body.password)
            .then(user=>res.json(user))
            .catch(error => {
                console.log(error)
                res.json(error)
            })
    }
}