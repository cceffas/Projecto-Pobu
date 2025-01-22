const express = require("express");
const { engine } = require("express-handlebars");
const DIR = require("path");

const RouteSystem = require("./routes/routes");
const { log } = require("console");

const servidor = express();

console.log()
servidor.engine("handlebars", engine());
servidor.set("view engine", "handlebars");
servidor.set("views",DIR.join(__dirname,'sources/views'))






const Routas = new RouteSystem(servidor);

servidor.get('/',function(req,res){

    res.render('home',{titulo:'pobuProject'})
})
// Routas.GET("/", "index");
Routas.GET("/home", "auth/home");

const porta = 3000;
servidor.listen(porta, () => {
  console.log("projecto pobu rodano no servidor http://localhost:" + porta);
});
