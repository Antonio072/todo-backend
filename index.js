// const http = require('http')


// function respondRequest( request, response){
//     response.end("Hi from Node")
// }

// let server = http.createServer(respondRequest)

// server.listen(3333)

const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/saludo', function (req, res) {
    res.send(`Hi from express ${req.query.name}`)
})

app.post('/', function (req, res) {
    res.send(`Hi from express ${req.body.name}`)
})

app.listen(3333)