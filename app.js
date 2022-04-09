'use strict'

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//Carregar  rutes
var user_routes = require("./routes/usuari");

//Middlewares o tasques que s'han de realitzar abans de rebre la petició
app.use(bodyParser.urlencoded({extended:false})); //Configurar  bodyparser
app.use(bodyParser.json()); //Rebem el cos de la petició i el transformem en un json

//configurar capçaleres

//Rutes base
app.use("/api", user_routes); //Definim una ruta base sobre la que treballar

module.exports = app;