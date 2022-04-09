'use strict' //per emprar expresions de js més modern

var mongoose = require("mongoose")
var Schema = mongoose.Schema; //Ens permetra el crear un objecte tipus schema de la bd i que posteriorment al guardar dades s'enmagatzamaran dins d'una coleccio concreta i alhora en un document.

var UsuariSchema = Schema({
    nom: String,
    cognom: String,
    email: String,
    clau: String
});

module.exports = mongoose.model("Usuari", UsuariSchema); //Exportem el model i genera un objecte anomenat Usuari, realitzant una instancia de totes les dades que nosaltres haguem enmagatzemat amb l'esquema definit