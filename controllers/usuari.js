'use strict'

var Usuari = require("../models/usuari"); 

function proves(req, res){
    res.status(200).send({
        message: "Provant una acció del controlador"
    });
}

function guardarUsuari(req, res){
    var usuari = new Usuari();
    var params = req.body; //recollim totes les dades que arriven en la peticio amb el metode post

    usuari.nom = params.nom;
    usuari.cognom = params.cognom;
    usuari.email = params.email;
    usuari.clau = params.clau;

    //console.log(params);

    if(usuari.nom != null && usuari.cognom != null && usuari.email != null && usuari.clau != null ){
        usuari.save((err, usuariStored) => {
            if(err){
                res.status(500).send({message: "Error al guardar l'usuari"});
            } else {
                if(!usuariStored){
                    res.status(404).send({message: "No s'ha registrat l'usuari"});
                } else {
                    res.status(200).send({usuari: usuariStored});
                }
            }
        })
    } else {
        res.status(402).send({message: "Indica totes les dades"});
    }
}

module.exports = {
    proves,
    guardarUsuari
};