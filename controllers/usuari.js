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

function veureUsuari(req, res){
    var params = req.body;

    var email = params.email;
    //var clau = params.clau;

    Usuari.findOne({email: email.toLowerCase()}, (err, usuari) => { //Permet cercar un registre per una propietat i tenim que definirli una funció fletxa amb el error i l'objecte
        if(err){
            res.status(500).send({message: "Error en la solicitud"});
        }else{
            if(!usuari){
                res.status(404).send({message: "Les credencials són incorrectes"});
            } else{
                //Dades del usuari loguejat
                res.status(200).send({usuari}); //Si no indiquem cap propietat, emprara la de usuari que coincideix amb el nom de l'objecte.
            }
        }
    });
}

function veureTotsUsuari(req, res){
    var params = req.body;

    var email = params.email;
    //var clau = params.clau;

    Usuari.find((err, usuari) => { //Permet cercar un registre per una propietat i tenim que definirli una funció fletxa amb el error i l'objecte
        if(err){
            res.status(500).send({message: "Error en la solicitud"});
        }else{
            if(!usuari){
                res.status(404).send({message: "Les credencials són incorrectes"});
            } else{
                //Dades del usuari loguejat
                res.status(200).send({usuaris: usuari}); //Si no indiquem cap propietat, emprara la de usuari que coincideix amb el nom de l'objecte.
            }
        }
    });
}

function actualitzarUsuari(req, res){
    var usuariId = req.params.id;
    var update = req.body;

    Usuari.findByIdAndUpdate(usuariId, update, (err,usuariActualitzat) =>{
        if(err){
            res.status(500).send({message: "Error al actualitzar l'usuari"});
        }else{
            if(!usuariActualitzat){
                res.status(404).send({message: "No s'ha pogut actualitzar l'usuari"});
            }else{
                res.status(200).send({usuari: usuariActualitzat});
            }
        }
    });
}

module.exports = {
    proves,
    guardarUsuari,
    veureUsuari,
    veureTotsUsuari,
    actualitzarUsuari
};