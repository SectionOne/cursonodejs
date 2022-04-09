'use strict'

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//Carregar  rutes

//Middlewares o tasques que s'han de realitzar abans de rebre la petició
app.use(bodyParser.urlencoded({extended:false})); //Configurar  bodyparser
app.use(bodyParser.json()); //Rebem el cos de la petició i el transformem en un json

app.use((req, res, next) => {
    console.log("middleware 1");
    next();
})

app.use((req, res, next) => {
    console.log("middleware 2");
    next();
})
//configurar capçaleres

//Rutes base
app.get("/get", (req, res) => {
    res.send("Soc un get")
})

app.post("/post", (req, res) => {
    //res.send("Soc un post")
    res.json(req.body) //Retornem en forma de Json el que ens hagin enviat
})

app.put("/put", (req, res) => {
    res.send("Soc un put")
})

app.delete("/delete", (req, res) => {
    res.send("Soc un delete")
})

module.exports = app;