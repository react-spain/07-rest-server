const express = require('express')
var cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

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
        this.app.get('/api', (req, res) => {
            res.json({
                ok:true,
                msg: 'get API'
            });
          });
          
          this.app.put('/api', (req, res) => {
            res.status('500').json({
                msg: 'put API'
            });
          });
          
          this.app.post('/api', (req, res) => {
            res.status('201').json({
                msg: 'post API'
            });
          });
          
          this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delete API'
            });
          });

          this.app.patch('/api', (req, res) => {
            res.json({
                msg: 'patch API'
            });
          });
            
    }
    listen(){
        this.app.listen(this.port , () =>{
            console.clear();
            console.log(`Servidor corriendo por: ${this.port}`);
        })
    }
}


module.exports = Server;