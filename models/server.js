const express = require('express')
var cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middleware
        this.middleware();

        // Rutas de mi aplicacion
        this.route();
    }

    middleware(){

        // CORS
        this.app.use( cors() );

        // Directorio Publico
        this.app.use( express.static('public') )
    }

    route(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'))    
    }
    listen(){
        this.app.listen(this.port , () =>{
            console.clear();
            console.log(`Servidor corriendo por: ${this.port}`);
        })
    }
}


module.exports = Server;