
class RouteSystem {

    SERVIDOR = null
    PATH_VIEW = __dirname.replace("routes", "sources/views/")

    constructor(servidor) {


        this.SERVIDOR = servidor


    }

    GET(url, view) {

        this.SERVIDOR.get(url, (req, res) => {

            res.sendFile(this.PATH_VIEW + view + ".html")

        })

    
        
    }



   



}


module.exports = RouteSystem







