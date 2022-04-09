'use strict'

var mongoose = require("mongoose");
var Schema  = mongoose.Schema;

var ImatgeSchema = Schema({
    arxiu: String,
    usuari: {type: Schema.ObjectId, ref: "Usuari"} //Referenciara un id d'objecte de la col.leccio Usuari
});

module.exports = mongoose.model("Imatge",ImatgeSchema);