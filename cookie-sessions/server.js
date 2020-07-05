const express = require('express')

const cookieSession = require('cookie-session')


const app = express()

app.use(cookieSession({
    name : 'session',
    keys : ['7fa8e7d7fa87e6d6a8f7de','adfe0e0d9f8e7da66e2d']
}))


app.get('/', function(req, res){
    req.session.visits = req.session.visits+1;

    res.send(`${req.session.visits} visitas`)
})


app.listen(3000)