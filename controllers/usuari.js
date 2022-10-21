'use strict'

const { UserController } = require("moongose/controller");
const Imatge = require("../models/imatge");
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

function borrarUsuari(req, res){
    var usuariId = req.params.id;
    var update = req.body;

    Usuari.findByIdAndDelete(usuariId, (err,usuariBorrat) =>{
        if(err){
            res.status(500).send({message: "Error al actualitzar l'usuari"});
        }else{
            if(!usuariBorrat){
                res.status(404).send({message: "No s'ha pogut borrar l'usuari"});
            }else{
                res.status(200).send({usuari: usuariBorrat});
            }
        }
    });
}

function uploadImages(req, res){
    var imatge = new Imatge(); //Instanciem l'objecte de la col·lecció imatge
    var userId = req.params.id;
    var file_name = "No pujat...";

    //Anem a comprobar si rebem algo per les variables globals de la peticio "files"
    if(req.files){ //recollim totes les dades que arriven en la peticio amb el metode post
        var file_path = req.files.image.path;
        var file_split = file_path.split("\\");
        file_name = file_split[2];
        imatge.arxiu = file_name; //Poblem l'objecte amb el nom d'arxiu
        imatge.usuari = userId; //Poblem l'objecte amb el id d'usuari

        var ext_split = file_path.split("\.");
        var file_ext = ext_split[1]; //Per obtenir l'extensió de l'arxiu

        //Comprovem si l'extensió és de les autoritzades
        if(file_ext == "png" || file_ext == "jpg" || file_ext == "gif"){
            //Guardem la imatge en la col·lecció imatge
            imatge.save((err, imatgeStored) => { //Obtenim els errors en el parametre err i l'objecte enmagatzemat en imatgeStored
                if(err){
                    res.status(500).send({message: "Error al guardar la imatge"});
                } else {
                    if(!imatgeStored){
                        res.status(404).send({message: "No s'ha registrat la imatge"});
                    } else {                        
                        res.status(200).send({imatge: imatgeStored});
                    }
                }
            })
        } else  {
            res.status(200).send({message: "Extensió de l'arxiu no vàlida"});
        }
        console.log(file_split); //Per provar
    } else {
        //Resposta per quan no rebem correctament l'arxiu
        res.status(200).send({message: "No has pujat ninguna imatge..."});
    }
}

function veureImgUsuari(req, res){
    var idUsuari = req.params.id;
    Imatge.find({usuari: idUsuari}, (err, imgUsuari) => { 
        console.log(imgUsuari);//Permet cercar un registre per una propietat i tenim que definirli una funció fletxa amb el error i l'objecte
        if(err){
            res.status(500).send({message: "Error en la solicitud"});
        }else{
            if(!imgUsuari){
                res.status(404).send({message: "No hi han imatges d'aquest usuari"});
            } else if(imgUsuari == ""){
                res.status(404).send({message: "Usuari no vàlid"});
            } else {
                //Imatges del usuari loguejat
                res.status(200).send({images: imgUsuari}); //Si no indiquem cap propietat, emprara la de usuari que coincideix amb el nom de l'objecte.
            }
        }
    });
}

module.exports = {
    proves,
    guardarUsuari,
    veureUsuari,
    veureTotsUsuari,
    actualitzarUsuari,
    borrarUsuari,
    uploadImages,
    veureImgUsuari
};
