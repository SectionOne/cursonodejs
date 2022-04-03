"use strict" //Per obtenir compatibilitat amb les ultimes versions

const express = require("express");
//const http = require('http');
var mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/curs_nodejs",(err, res) =>{
if(err){
throw err;
}else{
console.log("La base de dades está funcionant correctamente");
}
});

//console.log("Hola mòn");

//const hostname = '127.0.0.1';
const app = express();
const port = 3000;

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});*/

app.get("/",(req,res) => {
    res.send("Hola mòn");
})

app.listen(port, () => {
    console.log("Exemple d'app escoltant");
})