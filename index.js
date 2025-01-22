const express = require("express");
const RouteSystem = require("./routes/routes");

const servidor = express();

const Routas = new RouteSystem(servidor);

Routas.GET("/", "index");
Routas.GET("/home", "auth/home");

const porta = 3000;
servidor.listen(porta, () => {
  console.log("projecto pobu rodano no servidor http://localhost:" + porta);
});
