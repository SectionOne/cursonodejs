'use strict'

var express = require("express");
var UsuariController = require("../controllers/usuari");

var api = express.Router();

api.get("/tots", UsuariController.proves);
api.post("/registre", UsuariController.guardarUsuari);
// api.put("/actualitzar-usuari/:id?"); Afegim un ? al final, per poder dir que aquest parametre és opcional.
module.exports = api;