'use strict'

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//Carregar  rutes

app.use(bodyParser.urlencoded({extended:false})); //Configurar  bodyparser
app.use(bodyParser.json());

//configurar capçaleres

//Rutes base
app.get("/get", (req, res) => {
    res.send("Soc un get")
})

app.post("/post", (req, res) => {
    res.send("Soc un post")
})

app.put("/put", (req, res) => {
    res.send("Soc un put")
})

app.delete("/delete", (req, res) => {
    res.send("Soc un delete")
})

module.exports = app;