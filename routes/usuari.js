'use strict'

var express = require("express");

var api = express.Router();

api.get("/get", (req, res) => {
    res.send("Soc un get")
})

api.post("/post", (req, res) => {
    res.send("Soc un post")
})

api.put("/put", (req, res) => {
    res.send("Soc un put")
})

api.delete("/delete", (req, res) => {
    res.send("Soc un delete")
})
// api.put("/actualitzar-usuari/:id?"); Afegim un ? al final, per poder dir que aquest parametre és opcional.
module.exports = api;