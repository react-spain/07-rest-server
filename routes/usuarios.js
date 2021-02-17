const { Router } = require('express');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosPatch, 
        usuariosDelete } = require('../controllers/usuarios');

const route = Router();


route.post('/', usuariosPost);
route.get('/', usuariosGet);
route.put('/:id', usuariosPut);
route.patch('/', usuariosPatch); 
route.delete('/', usuariosDelete);

module.exports = route;