"use strict" //Per obtenir compatibilitat amb les ultimes versions

var mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/curs_nodejs",(err, res) =>{
if(err){
throw err;
}else{
console.log("La base de dades está funcionant correctamente");
}
});

console.log("Hola mòn");