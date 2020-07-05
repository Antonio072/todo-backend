const express = require('express')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')





const app = express()

app.use(bodyParser.urlencoded({ extended: true }))


// let db = new sqlite3.Database('proyecto-backend')

// Se da el nombre de la bd, nombre de usuario y contraseña
const sequelize = new Sequelize('proyecto-backend',null,null,{
    dialect: 'sqlite',
    storage: './proyecto-backend'
})


// db.run("CREATE TABLE task(id int AUTO_INCREMENT, descrption varchar(255))")
app.post("/pendientes", function (req, res) {
    console.log(req.body.description);
    
    //  db.run(`INSERT INTO task(description) VALUES(?)`,req.body.description)
    // Task.create({
    //     description: req.body.description
    //    });
     res.send("Insercion finalizada")
})



app.listen(3000)

