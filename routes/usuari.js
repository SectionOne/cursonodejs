'use strict'

var express = require("express");
var UsuariController = require("../controllers/usuari");

var api = express.Router();
var multipart = require("connect-multiparty");

//middleware
var md_upload = multipart({ uploadDir: './uploads/users'});

api.get("/tots", UsuariController.proves);
api.post("/registre", UsuariController.guardarUsuari);
api.post("/veureusuari", UsuariController.veureUsuari);
api.get("/veuretotsusuari", UsuariController.veureTotsUsuari);
api.put("/actualitzar-usuari/:id", UsuariController.actualitzarUsuari);
api.delete("/borrarusuari/:id", UsuariController.borrarUsuari);
api.post("/upload-image-user/:id", [md_upload], UsuariController.uploadImages);
// api.put("/actualitzar-usuari/:id?"); Afegim un ? al final, per poder dir que aquest parametre és opcional.
module.exports = api;