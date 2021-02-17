const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');
const route = Router();


route.get('/', usuariosPost);
route.get('/', usuariosGet);
route.get('/', usuariosPut);
route.get('/', usuariosPatch); 
route.get('/', usuariosDelete);

module.exports = route;