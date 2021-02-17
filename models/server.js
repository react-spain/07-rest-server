const express = require('express')
var cors = require('cors');
const { dbConetion } = require('../database/conf');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Conectar a la BD
        this.connectarBD();

        // Middleware
        this.middleware();

        // Rutas de mi aplicacion
        this.route();
    }


    async connectarBD(){
        await dbConetion();
    }

    middleware(){

        // CORS
        this.app.use( cors() );

        // Parseo y lectura del body
        this.app.use( express.json() );

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