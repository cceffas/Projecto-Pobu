const express = require('express')
/* const RouteSystem = require("./routes/routes") */
const handlebars = require("express-handlebars");
const servidor = express()

/* const servdor = Handlebars.compile("defa: {{name}}");
console.log(template({ name: "Nils" }));
 */

/* servidor.engine('handlebars', handlebars({defaultLayout: "main"}))
servidor.set("view engine", "handlebars") */

servidor.engine('handlebars', handlebars({ defaultLayout: "main" }));
servidor.set("view engine", "handlebars");

/* const Routas = new RouteSystem(servidor)




Routas.GET("/", "index")

Routas.GET("/home","auth/home")
 */






const porta = 3000
servidor.listen(porta, () => {
    console.log("Rodando...")
})




