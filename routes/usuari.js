'use strict'

var express = require("express");
var UsuariController = require("../controllers/usuari");

var api = express.Router();

api.get("/tots", UsuariController.proves);
api.post("/registre", UsuariController.guardarUsuari);
api.post("/veureusuari", UsuariController.veureUsuari);
api.get("/veuretotsusuari", UsuariController.veureTotsUsuari);
api.put("/actualitzar-usuari/:id", UsuariController.actualitzarUsuari);
api.delete("/borrarusuari/:id", UsuariController.borrarUsuari);
// api.put("/actualitzar-usuari/:id?"); Afegim un ? al final, per poder dir que aquest parametre és opcional.
module.exports = api;